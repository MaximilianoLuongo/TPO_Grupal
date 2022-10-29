//entre las comillas va el codigo html

document.getElementById("header").innerHTML = `

            <nav class="nav">
                <img src="./imagenes/logo2.png" alt="Logo pelis">
                <ul>
                    <li><a href="index2.html"> Home </a></li>
                    <li><a href="peliculas.html"> Top 10 </a></li>
                    <li><a href="proximamente.html"> Próximamente </a></li>
                    <li><a href="suscribite.html"> Suscribite </a></li> <!-- Formulario -->
                </ul>
            </nav>

`

document.getElementById("footer").innerHTML = `

<footer class="footer">
    <div class="bloqueFooter">
        <div>
            <h4 class="tituloFooter">Nuestro sitio</h4>
            <ul class="menuFooter">
                <li><a href="index2.html">Inicio</a></li>
                <li><a href="peliculas.html">Top 10</a></li>
                <li><a href="proximamente.html">Próximamente</a></li>
                <li><a href="suscribite.html">Suscribite</a></li>
            </ul>
        </div>
        <div>
            <h4 class="tituloFooter">Estamos con vos</h4>
            <ul class="menuFooter">
                <li><a href="index2.html">Inicio</a></li>
                <li><a href="peliculas.html">Top10</a></li>
                <li><a href="proximamente.html">Próximamente</a></li>
                <li><a href="suscribite.html">Suscribite</a></li>
            </ul>
        </div>
    <div>
        <h4 class="tituloFooter">Enlaces relacionados</h4>
        <ul class="menuFooter">
            <li><a href="https://decine21.com/listas-de-cine/lista/las-mejores-peliculas-argentinas-100088">DeCine21</a></li>
            <li><a href="https://www.filmin.es/catalogo/pais/argentina">Filmin</a></li>
        </ul>
    </div>
    <div class="creditoFinal"> Desarrollado por Richard Moreno </div>
    <a href="suscripcion" class="btn btn-primary" role="button">Suscribíte</a>
    </form>
</footer>


`
//-----------------------------------------------------------------------------------------------------------

