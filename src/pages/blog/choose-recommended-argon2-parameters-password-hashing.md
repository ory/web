---
published: true
path: '/choose-recommended-argon2-parameters-password-hashing/'
title: >
  Choose Argon2 Parameters for Secure Password Hashing and Login

metaDescription: >
  Pick recommended Argon2 (Argon2id, Argon2i) parameters (iteration, memory,
  parallelism) for secure login and password hashing, following security best
  practices using only open source.

metaTitle: >
  Recommended Argon2 Parameters for Secure Login and Protecting Passwords

publishedAt: '2020-11-11'
author: 'Patrik Neu'
overline: >
  Secure Password Hashing and Login

category: Security
subtitle: >
  Use open source to pick recommended Argon2 (Argon2id, Argon2i) parameters
  (iteration, memory, parallelism) and settings for secure login and password
  hashing.

teaser:
  This article sums up all the security best practices around Argon2 parameter
  choice. It also presents a CLI tool to automatically calibrate the best
  values.
---

At Ory we develop open source access control and user management software. This
guide sums up all the security best practices we follow and developed around
Argon2. It first provides some background on Argon2 and best practice for
choosing its parameters. I also wrote a CLI that allows you to calibrate the
Argon2 parameter values according to your constrains and resources.

## Arogn2 - Secure Login and Password Hashing

To securely manage credentials, one has to only store a cryptographic hash of
the credential. Whenever the credential has to be checked, the hash of the
provided credential is computed and compared to the stored hash. This ensures
that no one is able to retrieve the credentials, even with full access to the
system's storage.

Argon2 is a cryptographic hash algorithm specifically designed to secure
passwords. It is
[recommended by OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#argon2id)
in the Argon2id variant as a modern, secure and flexible algorithm. This
flexibility means that one has to choose some parameters and is probably the
reason why you are reading this article.

## Argon2's Cryptographic Password Hashing Parameters

Let me introduce you to the parameters and explain their role in the hashing
operation. This section is based on the paper
[Argon2: the memory-hard function for password hashing and other applications](https://password-hashing.net/argon2-specs.pdf).

1. **Memory**: The memory used by the algorithm. To make hash cracking more
   expensive for an attacker, you want to make this value as high as possible.
2. **Iterations**: The number of iterations over the memory. The execution time
   correlates linearly with this parameter. It allows you to increase the
   computational cost required to calculate one hash.
3. **Parallelism**: The number of threads to use. This should be chosen as high
   as possible to reduce the threat imposed by parallelized hash cracking.
4. **Salt Length**: The authors of Argon2 recommend this parameter to be 128
   bits, but say it can be reduced to 64 bits in the case of space constraints.
5. **Key Length** (i.e. Hash Length): This parameter depends on the intended
   usage. The Argon2 algorithm authors claim that a value of 128 bits should be
   sufficient for most applications. If you plan to use the hash as a derived
   key for e.g. AES, you can use this parameter to get a key of the required
   length.

## Choose the Right Argon2 Parameters

Now that we know the parameters, we can start to determine the exact values.
Start with the fixed parameters. The degree of **parallelism** should be twice
the amount of available CPU cores dedicated to hashing. Choose a **salt length
and key length** of 128 bits unless you have a strict space constraint or
require longer keys.

### Login Time Versus Security

Our goal is to tune the parameters so that a single hashing operation takes an
acceptable amount of time. Here, user experience is in conflict with security,
and even in the interest of users security should win out. For frontend
applications the execution time should be at least 0.5s, but you should strive
to make it 1s. Backend authentication can take a bit longer, but that depends on
your use case. Have a look in the
[Argon2 specification paper](https://password-hashing.net/argon2-specs.pdf) to
get some recommended durations for different applications.

### Adjust Memory and Iterations Parameters

To reach the desired execution time, you can tweak two variables. It is
recommended to start with the highest amount of memory possible and one
iteration. Reduce the memory until one hashing operation takes less than your
desired duration. Next, advance the number of iterations to approach the
desired< execution time as close as possible.

## Use Open Source to Choose Recommended Parameters

If the previous paragraph sounds like an algorithm to you, then you are
absolutely right. We wrote a small CLI helper that allows you to run this
procedure in an automated manner. It is part of our user management system
[Ory Kratos](https://github.com/ory/kratos). You can use the prebuild binary
from GitHub releases or docker image to run the CLI on your server and figure
out the best values for your setup. It is as easy as running:

```
$ kratos hashers argon2 calibrate 1s
```

Or using docker:

```
$ docker run -it --entrypoint kratos oryd/kratos:v0.5 hashers argon2 calibrate 1s
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

## Conclusion

This article is purposely brief and aims to be an introduction and reference for
developers that want to use the Argon2 password hashing algorithm for
implementing secure login. Check out the
[Ory Kratos](https://github.com/ory/kratos) open source project if you are
looking for a login, registration, 2fa, profile management system where you can
bring your own UI!

## References

- [Argon2 IEFT draft, section on parameter choice](https://tools.ietf.org/html/draft-irtf-cfrg-argon2-11#section-4)
- [Argon2 Specification Paper](https://password-hashing.net/argon2-specs.pdf)
- [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [Calibration CLI Implementation in C# by @bburman](https://github.com/bburman/Twelve21.PasswordStorage)
