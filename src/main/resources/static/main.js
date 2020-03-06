$(function (){

                $.ajax({
                    type: 'GET',
                    url: '/',
                    success: function(greeting) {
                        console.log(greeting.name);

                    }
                 });

            });