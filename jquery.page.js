//处理翻页，格式为  <  1  ...  4  5  6  ...  9  >

/*
 <div class="page">
 <a class="prev">&nbsp;</a>
 <a class="first">1</a>
 <a class="poi left">...</a>
 <a class="one">4</a>
 <a class="two active">5</a>
 <a class="three">6</a>
 <a class="poi right">...</a>
 <a class="last">9</a>
 <a class="next">&nbsp;</a>
 </div>
*/

jQuery.fn.creatPage = function(curIn,maxIn,callback){

    var maxNp = maxIn,
        $wrap = $(this),
        $all = $wrap.find('a'),
        $prev = $wrap.find('.prev'),
        $first = $wrap.find('.first'),
        $left = $wrap.find('.left'),
        $btn_1 = $wrap.find('.one'),
        $btn_2 = $wrap.find('.two'),
        $btn_3 = $wrap.find('.three'),
        $right = $wrap.find('.right'),
        $last = $wrap.find('.last'),
        $next = $wrap.find('.next'),
        btn = [];
    $last.text(maxIn);
    btn.push($btn_1);
    btn.push($btn_2);
    btn.push($btn_3);

    function setMax(num){
        maxNp = num;
    };

    function setCur(cur){
        $wrap.attr('curPageNumCache',cur);
    }

    function getCur(){
        return $wrap.attr('curPageNumCache');
    }

    function onClick(curN){

        if(curN<=0||curN>maxNp) return;
        setCur(curN);
        $all.show();
        for(var k=0;k<3;k++){
            btn[k].text(curN+(k-1));
        }
        $first.text(1);
        $last.text(maxNp);

        if(curN==1){
            $prev.hide();
            $first.hide();
            $left.hide();
            $btn_1.hide();
        }
        if(curN==2){
            $btn_1.hide();
            $left.hide();
        }
        if(curN==3){
            $left.hide();
        }
        if(curN==maxNp){
            $next.hide();
            $last.hide();
            $right.hide();
            $btn_3.hide();
        }
        if(curN==maxNp-1){
            $btn_3.hide();
            $right.hide();
        }
        if(curN==maxNp-2){
            $right.hide();
        }
    }


    $first.click(function(){
        onClick(1);
        callback(1);
    });
    $prev.click(function(){
        var cur = parseInt(getCur());
        cur--;
        onClick(cur);
        callback(cur);
    });
    $btn_1.click(function(){
        var cur = parseInt(getCur());
        cur--;
        onClick(cur);
        callback(cur);
    });
    $btn_3.click(function(){
        var cur = parseInt(getCur());
        cur++;
        onClick(cur);
        callback(cur);
    });
    $next.click(function(){
        var cur = parseInt(getCur());
        cur++;
        onClick(cur);
        callback(cur);
    });
    $last.click(function(){
        onClick(maxNp);
        callback(maxNp);
    });


    //默认
    //onClick(curIn);

    var re = {};
    re.updateMax = function(num){
        setMax(Math.ceil(num));
        onClick(parseInt(getCur()));
    };
    re.clickFirst = function(){
        //alert('clickFirst');
        $first.click();
    };

    return re;

}





//判断某一属性是否存在
jQuery.fn.hasClass = function(name){
