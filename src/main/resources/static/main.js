function getGreeting(){

                $.ajax({
                    type: 'GET',
                    url: '/',
                    success: function(data) {
                        console.log('success', data);
                    }
                 });

            }