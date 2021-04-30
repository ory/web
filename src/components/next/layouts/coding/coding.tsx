import React from 'react'
import * as styles from './coding.module.css'
import cn from 'classnames'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import ContentText from '../../freestanding/content/content-text'
import MoleculeTextInteraction from '../../freestanding/molecule/molecule-text-interaction'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Button from '../../freestanding/button/button'
import { ArrowRight, ArrowSquareIn, GitDiff } from 'phosphor-react'
import Terminal from '../../freestanding/code/terminal'
import Code from '../../freestanding/code/code'

const Coding = () => (
  <div className={cn(styles.coding)}>
    <Container fluid={true}>
      <Container>
        <Grid lg={4} md={10} sm={10}>
          <Container flexContainer={'column'}>
            <ContentText>
              <MoleculeTextInteraction>
                <Molecule>
                  <p className={cn('font-h3-light')}>
                    Ory takes developer experience serious
                  </p>
                  <p className={cn('font-p-light')}>
                    At Ory, our mission is to improve the developer experience.
                    Ory ships with SDKs for all programming languages, extensive
                    and detailed documentation, easy-to-use CLIs. Our open
                    source approach enables you to participate in API and
                    architecture design - your next PR will be shipped in Ory.
                  </p>
                </Molecule>
                <MoleculeInteraction>
                  <Button href={''} style={'filled'}>
                    Documentation
                  </Button>
                </MoleculeInteraction>
              </MoleculeTextInteraction>
            </ContentText>
            <Container
              flexContainer={'row'}
              justify={'center'}
              alignItems={'start'}
            >
              <Grid lg={6} md={6} sm={12} lgOffset={false} mdOffset={false}>
                <ContentText>
                  <MoleculeTextInteraction>
                    <Molecule>
                      <GitDiff
                        className={cn('icon-dark')}
                        weight={'duotone'}
                        size={32}
                      />
                      <p className={cn('font-h3-light')}>Powerful Tools</p>
                      <p className={cn('font-p-light')}>
                        Ory ships REST APIs, gRPC APIs, SDKs, and CLIs for all
                        operating systems and CPUs.
                      </p>
                    </Molecule>
                    <MoleculeInteraction>
                      <a
                        className={cn('font-link font-link-md link-news')}
                        href={''}
                      >
                        API Reference <ArrowRight />
                      </a>
                    </MoleculeInteraction>
                  </MoleculeTextInteraction>
                </ContentText>
              </Grid>
              <Grid lg={6} md={6} sm={12} lgOffset={false} mdOffset={false}>
                <ContentText>
                  <MoleculeTextInteraction>
                    <Molecule>
                      <GitDiff
                        className={cn('icon-dark')}
                        weight={'duotone'}
                        size={32}
                      />
                      <p className={cn('font-h3-light')}>
                        Based on Open Source
                      </p>
                      <p className={cn('font-p-light')}>
                        Participate in discussions, feature requests, bug fixes,
                        and PRs the way you are used to from open source.
                      </p>
                    </Molecule>
                    <MoleculeInteraction>
                      <a
                        className={cn('font-link font-link-md link-news')}
                        href={''}
                      >
                        GitHub <ArrowSquareIn />
                      </a>
                    </MoleculeInteraction>
                  </MoleculeTextInteraction>
                </ContentText>
              </Grid>
            </Container>
          </Container>
        </Grid>

        <Grid lg={5} className={cn('hidden-sm hidden-md')}>
          <Container
            flexContainer={'column'}
            alignItems={'start'}
            className={cn(styles.codeContainer)}
          >
            <Code
              code={`const app = express();
const kratos = new PublicApi(new Configuration({
  basePath: 'https://<my-project>.projects.oryapis.com/api/kratos/public',
}));
function protect(req, res, next) {
  kratos.whoami(req.header('Cookie'), req.header('Authorization'))
    .then(({ data: session }) => {
      req.session = { session };
      next();
    })
    // If no session is found, redirect to login.
    .catch(() => {
      res.redirect('/login');
    });
}`}
            ></Code>
            <Terminal
              code={`$ export ORY_ACCESS_TOKEN=RaEEZfMbx7QGuf0uWNt9c15NE4FG4OOW
$ ory identities list --project playground --format json-pretty
[
  {
     "id": "7c7d040d-97f6-4a57-95e8-08c61e6df016",
     "schema_id": "default",
     "schema_url": "https://playground.projects.oryapis.com/api/kratos/public/schemas/default",
     "traits": {
       "email": "alice@example.com"
     }
   }
]`}
            ></Terminal>
          </Container>
        </Grid>

        <Grid md={6} mdOffset={false} className={cn('hidden-lg hidden-sm')}>
          <Container
            flexContainer={'column'}
            alignItems={'center'}
            justify={'center'}
            className={cn(styles.codeContainer)}
          >
            {/*Currently unstable for tablet and mobile view*/}
            {/*<Code
            code={`const app = express();
const kratos = new PublicApi(new Configuration({
  basePath: 'https://<my-project>.projects.oryapis.com/api/kratos/public',
}));
function protect(req, res, next) {
  kratos.whoami(req.header('Cookie'), req.header('Authorization'))
    .then(({ data: session }) => {
      req.session = { session };
      next();
    })
    // If no session is found, redirect to login.
    .catch(() => {
      res.redirect('/login');
    });
}`}
          ></Code>*/}
            {/*<Terminal
            code={`$ export ORY_ACCESS_TOKEN=RaEEZfMbx7QGuf0uWNt9c15NE4FG4OOW
$ ory identities list --project playground --format json-pretty
[
  {
     "id": "7c7d040d-97f6-4a57-95e8-08c61e6df016",
     "schema_id": "default",
     "schema_url": "https://playground.projects.oryapis.com/api/kratos/public/schemas/default",
     "traits": {
       "email": "alice@example.com"
     }
   }
]`}
          ></Terminal>*/}
          </Container>
        </Grid>
      </Container>
    </Container>
  </div>
)

export default Coding
