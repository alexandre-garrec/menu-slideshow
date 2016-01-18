
var MenuSlideShow = (function () {

    // Private vars
    var _menu            = null;
    var _currentMenuItem = null;
    var _currentSelected = null;
    var _activeClassName = "active";

    // Constructor
    function MenuSlideShow (menu) {

        _menu =  document.querySelector(menu);

        setActive({target : _menu.children[0]})
        startListener();

        return this;
    }

    // Event listener
    function startListener () {
        _menu.addEventListener("mouseover" , setActive);
    }

    function setActive (e) {

        var selected = e.target.tagName != "LI" ? e.target.parentNode : e.target;
        var nenuItem = document.querySelector("." + selected.getAttribute("data-display"));


        selected.className += " " + _activeClassName;
        nenuItem.className += " " + _activeClassName;
        

        if (!!_currentMenuItem && !!_currentSelected) {
            _currentMenuItem.className = _currentMenuItem.className.replace( " " + _activeClassName , "" );
            _currentSelected.className = _currentSelected.className.replace( " " + _activeClassName , "" );
        }

        _currentSelected = selected;
        _currentMenuItem = nenuItem;
    }
   
    return MenuSlideShow;

})();