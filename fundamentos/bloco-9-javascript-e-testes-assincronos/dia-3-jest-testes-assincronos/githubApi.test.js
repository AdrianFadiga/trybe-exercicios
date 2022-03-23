// githubApi.test.js

const fetch = require('node-fetch');
const url = 'https://api.github.com/orgs/tryber/repos';

const getRepos = async (url) => {
 return await fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
};

getRepos(url);

// implemente seus testes aqui

describe('Bateria de testes da aula 9.3', () => {
  it('Testa se o retorno da função getRepos(url) inclui os repositórios sd-04-block7-project-daily-prophet-tests e sd-04-block6-project-facebook-signup-tests', async () => {
    expect.assertions(2);
    expect(await getRepos(url)).toContainEqual('sd-04-block7-project-daily-prophet-tests');
    expect(await getRepos(url)).toContainEqual('sd-04-block6-project-facebook-signup-tests');
  })
});