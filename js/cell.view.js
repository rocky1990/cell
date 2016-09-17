/**
 * Created by Rocky on 2016/9/13.
 */
cell.view = (function () {
    var initview, Block, Cell,
        stateMap = {
            $container: null,
            container: null,
            cellarr: new Array(),
        },
        paramsMap = {
            count: null,
        };

    function Cell(params) {
        this.width = 5;
        this.height = 5;
        this.x = params.x;
        this.y = params.y;
        this.index = params.index;
        this.alive = -1;
        this.container = params.container;
        this.element = this.Element();
    };
    Cell.prototype.Alive = function () {
        this.alive = 1;
        this.element.setAttribute("style", "fill:black");
        // setTimeout(Cell.prototype.Alive,1000);

    };
    Cell.prototype.Die = function () {
        this.alive = -1;
    };
    Cell.prototype.Element = function () {
        var node = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.container.appendChild(node);
        var rect = this.container.lastChild;
        rect.style.x = this.x;
        rect.style.y = this.y;
        rect.style.width = this.width;
        rect.style.height = this.height;
        rect.setAttribute("class", "cell");
        return rect;
        // var node=document.createElement("<rect class='cell' x='" + this.x + "' y='" + this.y
        //     + "' width='" + this.width + "' height='" + this.height + "'></rect>\n");

    };

    initview = function () {
        stateMap.$container = $("#svgline1");
        stateMap.container = document.getElementById("svgline1");
        paramsMap.count = 401;
        var htmldata = String();
        var carr = new Array();
        for (var i = 0; i < paramsMap.count; i++) {
            var cell = new Cell({x: 5 * i, y: 0, index: i, container: stateMap.container,});
            carr.push(cell);
            // stateMap.container.appendChild(node);
            // htmldata += "<rect class='cell' x='" + cell.x + "' y='" + cell.y
            //     + "' width='" + cell.width + "' height='" + cell.height + "'></rect>\n";
        }
        stateMap.cellarr.push(carr);
        // var ncount=0;
        // var SetOut=function () {
        //     stateMap.cellarr[0][ncount].Alive();
        //     ncount++;
        //     alert(ncount);
        //     // for (var i = 0; i < stateMap.cellarr[0].length; i++) {
        //     //     // var c = stateMap.cellarr[0][i];
        //     //     // alert(c.element.getAttribute("x"));
        //     //     stateMap.cellarr[0][i].Alive();
        //     //     // function mysettimeout(cell) {
        //     //     //     setTimeout(cell.Alive,100);
        //     //     // };
        //     //     // mysettimeout(stateMap.cellarr[0][i]);
        //     // }
        //     if(ncount<10)
        //     { setTimeout(SetOut,10);}
        //
        // };
        // SetOut();

        // stateMap.container.innerHTML=htmldata;
        // $("<rect class='cell' x='100' y='0' width='100' height='100'></rect>").appendTo("#svgline1");
    };
    return {
        initview: initview,
        Cell: Cell
    };
}());