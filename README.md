<h1> Desafio Módulo 1</h1>

<p>API para uma plicação para armazenar projetos e suas tarefas do zero utilizando Express.</p>

<h3>ROTAS</h3>
<ul>
  <li>
    <code>POST /projects</code> A rota deve receber <code>id</code> e <code>title</code> dentro corpo de cadastrar um novo projeto dentro de um array. Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com àspas duplas.
  </li>
  <li>
    <code>GET /projects</code>: Rota que lista todos projetos e suas tarefas;
  </li>
  <li>
    <code>PUT /projects/:id</code>: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;
  </li>
  <li>
    <code>DELETE /projects/:id</code>: A rota deve deletar o projeto com o id presente nos parâmetros da rota;
  </li>
  <li>
    <code>POST /projects/:id/tasks</code>: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;
  </li>
</ul>

<h3>LICENÇA</h3>
<p>Esse projeto está sob a licença MIT.</p>
