# Serverless-AWS NodeJS+Typescript 
This template utilize YAML file as Serverless Framework config.\
For Typescript config, (delete serverless*.yaml after running the command) run:\
`npx serverless-yaml2ts`

# Quickstart
1. Clone this project
2. Install packages: `npm install`
3. Run local: `sls offline -s dev`
4. Start developing 🎉

# Environment Variables
(https://www.serverless.com/framework/docs/environment-variables) \
Project enviroment variables will be injected when bootstrapping from file as structured:
```bash
# .env.dev
FOO=BAR
HELLO=WORLD
```
- filename:`.env.{stage}` will define which file to inject during the bootstrap (e.g. `.env.dev` gets picked up during `sls offline -s dev`)
- For `sls deploy`, required environments has to be defined in Serverless config file (read [here](https://www.serverless.com/framework/docs/providers/aws/guide/variables/))
- Environment variables will be injected regardlessly during `sls offline`