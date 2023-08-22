<h1>FIRE (site)</h1>
<h2>Resumo<h2>
<p>O site tem o intuito de apresentar o protótipo FIRE, e a necessidade para tal. Neste sentido o site e separado em 5 partes:</p>
<ol>
    <li>Apresentação</li>
    <li>Dados de incêndios nos últimos anos</li>
    <li>Principais características do protótipo</li>
    <li>Dados vindo do protótipo</li>
    <li>Colaboradores</li>
</ol>
<p>Falaremos sobre as motivações de escolhas para desenvolver a página</p>
<h2>Introdução</h2>
<p>Neste projeto foi feito para apresentar o protótipo FIRE, que tem o foco para um detector de incêndios, sendo que este site não será uma aplicação focada uma forma prática de um sistema para tal produto, mas sim, uma apresentação ao cliente que procura este tipo de produto para proteger a floresta. </p>
<p>Para tal empreitada utilizamos react js (para o front end),css,node js (para o back end) e mysql, as dependências usadas foram : </p>
<ul>
    <li>react-icons (Alguns icones para o site)</li>
    <li>react-router-dom (Linkar os conteúdos da página)</li>
    <li>react-router-hash-link ( para navegar nos elementos da página)</li>
    <li>Mysql (comunicar com o mysql)</li>
    <li>express (Facilitar o processo de criação do server)</li>
    <li>Cors (Permitir varias alterações, mais ao lado do server)</li>
    <li>Socket.io (Dar informações em tempo real para o cliente)</li>
</ul>
<h2>Sumario </h2>
<ol>
    <li>
        <a href="#parte_superior">Parte superior</a>
        <ul>
            <li>Como</li>
            <li>Cores</li>
        </ul>
    </li>
    <li>
        NavBar
        <ul>
            <li>Como</li>
            <li>Cores</li>
        </ul>
    </li>
    <li>
        Home
        <ul>
            <li>Como</li>
            <li>Cores</li>
        </ul>
    </li>
    
</ol>

<h2 id='parte_superior'>Parte superior</h2>
<p>A parte superior é formada pelos conjutos NavBar e Home, sendo que NavBar pode passear junto com o usuario ao descer da página.</p>
<p>A localização do arquivo é </p>

```
|_ infraestrutura
|_ modelos
|_ public
|_ rotas
|_ src
    |_ componentes 
        |_ layout
            ...
            ParteSuperior.js
            ParteSuperior.module.css
    |_ img
    ...
```
<p> Os arquivos .js e css, se auto compoem onde esse arquivo .css só servirá para o arquivo ParteSuperior, mas antes de dar uma olhada no arquivo .css, vamos dar uma olhada no ParteSuperior.js </p>
<p>Olhando nas linhas de códigos podemos notar que os valores que preencheram o a div virá de outro arquivos, isso se dá por meio da props (propriedade) que está recebendo um valor de terceiros, assim tornando a div em um elemento pai.</p>

```
import styles from './ParteSuperior.module.css'

function ParteSuperior(props){
    return(
        <div className={styles.principal}>
            {props.children}
        </div>
    )
}

export default ParteSuperior
```

<p>As cores usadas foram baseadas no gráfico¹ de pizza que está classificada por meio da amazonia (#6f3b38).Entretanto nem sempre foi assim, a antiga cor era um vermelho mais claro (#ff424), devido a conversa entre o professor ao nosso grupo optamos a cor mais escura, pois a mais clara após um tempo cansaria a vista do usuario da página  </p>


<p>Gráfico¹ :Se encontra no índice do dados incendio, sendo esse dado pelo portal de imprensa G1 </p>
