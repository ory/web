---
published: true
path: '/argon2-parameter-choice-best-practice/'
title: >
  Set-up Argon2 for secure password hashing 

metaDescription: >
  How to configure the cryptographic hashing function Argon2 following best
  practices

metaTitle: >
  Set-up Argon2 for secure password hashing

publishedAt: '2020-11-02'
author: 'Patrik Neu'
overline: >
  Security Best Practices

category: Security
subtitle: >
  How to configure Argon2's cryptographic hashing algorithm

teaser:
  This article sums up all the security best practices around Argon2 parameter
  choice. It also presents a CLI tool to automatically calibrate the best
  values.
---

## What is Argon2?

To securely manage credentials, one has to only store a cryptographic hash of
the credential. Whenever the credential has to be checked, the hash of the
provided credential is computed and compared to the stored hash. This ensures
that no one is able to retrieve the credentials, even with full access to the
services' storage.

Argon2 is a cryptographic hash algorithm specifically designed to secure
passwords. It is
[recommended by OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#argon2id)
in the Argon2id variant as a modern, secure and flexible algorithm. This
flexibility means that one has to choose some parameters and is probably the
reason why you are reading this article.

## Meet the Argon2 cryptographic hashing Parameters

So let me introduce you to the parameters and explain their impact on the
hashing operation. This section is based on the
[Argon2 specification paper](https://password-hashing.net/argon2-specs.pdf).

1. Memory: The memory used by the algorithm. To make hash cracking more
   expensive for an attacker, you want to make this value as high as possible.
2. Iterations: The number of iterations over the memory. The execution time is
   linearly dependent on this parameter. It allows you to increase the
   computational cost required to calculate one hash.
3. Parallelism: The number of threads to use. This should be chosen as high as
   possible to reduce the threat imposed by parallelized hash cracking.
4. Salt Length: The authors of Argon2 recommend this parameter to be 128 bits,
   but say it can be reduced to 64 bits in the case of space constraints.
5. Key Length: This parameter depends on the intended usage. The authors say a
   value of 128 bits should be sufficient for most applications. If you plan to
   use the hash as a derived key for e.g. AES, you can use this parameter to get
   a key of the required length.

## How to Choose the Parameter Values

Now that we know the parameters, we can start to determine the exact values.
Start with the fixed parameters. The degree of **parallelism** should be twice
the amount of available CPU cores dedicated to hashing. Choose a **salt length
and key length** of 128 bits unless you have a strict space constraint or
require longer keys.

### Desired Execution Time

Our goal is to tune the parameters so that a single hashing operation takes an
acceptable amount of time. Here the user experience is in conflict with
security, and even in the interest of users security should win out. For
frontend applications the execution time should be at least 0.5s, but you should
strive to make it 1s. Backend authentication can take a bit longer, but that
depends on your use case. Have a look in the
[Argon2 specification paper](https://password-hashing.net/argon2-specs.pdf) to
get some recommended values for different applications.

### Adjust Memory and Iterations

To reach the desired execution time, you have two variables to tweak. It is
recommended to start with the highest amount of memory possible and one
iteration. Reduce the memory until one hashing operation takes less than your
desired duration. Next, advance the number of iterations to approach the desired
execution time as close as possible.

## Automate it!

If the previous paragraph sounds like an algorithm to you, then you are
absolutely right. We wrote a small CLI helper that allows you to run this
procedure in an automated manner. It is part of
[ORY Kratos](https://github.com/ory/kratos). You can use the prebuild binary or
docker image to run the CLI on your server and figure out the best values for
your setup. It is as easy as running:

```
$ kratos hashers argon2 calibrate 1s --verbose
```

Or using docker:

```
$ docker run -it --entrypoint kratos oryd/kratos:latest hashers argon2 calibrate 1s --verbose
```

The CLI allows you to set all your constrains, just have a look at all the
options using the `--help` flag. An exemplary output could be:

```yaml
{
  'memory': 1048576, # = 1GB in KB
  'iterations': 2,
  'parallelism': 8,
  'salt_length': 16, # in bytes
  'key_length': 32, # in bytes
}
```

## References

- [Argon2 IEFT draft, section on parameter choice](https://tools.ietf.org/html/draft-irtf-cfrg-argon2-11#section-4)
- [Argon2 Specification Paper](https://password-hashing.net/argon2-specs.pdf)
- [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [Calibration CLI Implementation in C# by @bburman](https://github.com/bburman/Twelve21.PasswordStorage)
