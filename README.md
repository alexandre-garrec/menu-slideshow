#  slideshow-menu


Simple slide show menu in JS


Usage
-----

HTML

        <nav>
            <ul class="myMenu">
                <li data-display='fisrtBlock'>
                    <a href="">go !</a>
                </li>
                <li data-display='secondBlock'>
                    <a href="">go !</a>
                 </li>
            </ul>
        </nav>
        <div class="Block fisrtBlock">fisrtBlock</div>
        <div class="Block secondBlock">secondBlock</div>

CSS

    .Block {
         display: none;
    }
    
    .Block.active {
        display: block;
    }

Script

     var menuSlideShow = new MenuSlideShow(".myMenu");




License
-------

[MIT License](https://opensource.org/licenses/MIT)