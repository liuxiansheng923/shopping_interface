$(function(){
    $('button').click(function(){
        var index = $(this).index();
        var num;
        var price = $(this).siblings('.one_price').val();
        
        // console.log(index);
        if(index == 1){
            if($(this).siblings('.count').val()>=1){
                num = $(this).siblings('.count').val();
                num--;
                $(this).siblings('.count').val(num);
                num = num*price;
                $(this).siblings('.money').val(num.toFixed(2));
            }
            
        }
            
        else{
            num = $(this).siblings('.count').val();
            num++;
            $(this).siblings('.count').val(num);
            num = num*price;
            $(this).siblings('.money').val(num.toFixed(2));
        }

        getSum();

    });

    // 当商品数量发生变化时
    $('.count').change(function(){
        var price = $(this).siblings('.one_price').val();
        var num = $(this).val();
        if($(this).val()<=999){
            num = num*price;
            $(this).siblings('.money').val(num.toFixed(2)); 
        }
        else
            alert('兄弟请你自重！'); 
        
    });
    
    getSum();

    $('.count').change(getSum);
    // 全选和全不选
    $('.checkAll').change(function(){
        console.log($(this).prop('checked'));
        $('.s-check').prop('checked',$(this).prop('checked'));
        
        
    });
    $('.s-check').change(function(){
            // console.log($(".s-check:checked").length);
            if($(".s-check:checked").length == 3)
                $('.checkAll').prop('checked',true);
            else
                $('.checkAll').prop('checked',false);
        });

    // 删除事件
        // 删除当前商品
    $('.del').click(function(){
        $(this).parents('.item').remove();
        getSum();
    });
        // 删除复选框选中的商品
    $('.checked_del a').click(function(){
        $('.s-check:checked').parents('.item').remove();
        getSum();
    });
        //  全部删除
    $('.all_del').click(function(){
        $('.item').remove();
        getSum();
    });
    // 封装函数：求总件数和、总计
    function getSum(){
        var count = 0;
        var money = 0;
        $('.count').each(function(index,Ele){
            if($(Ele).val()<=999){
                count+=parseInt($(Ele).val());
            }
            
            
            else{
                alert('兄弟请你自重！');
                $(Ele).val(0);
                $(Ele).siblings('.money').val(0);
            }
                
        });
        $('.count_all').val(count);
        $('.money').each(function(index,Ele){
            money+=parseFloat($(Ele).val());  
        });
        $('.money_all').val(money.toFixed(2));
    }
})
