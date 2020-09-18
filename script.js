

        var c= 1;
        

        function doSomething() {

            fetch('http://www.boredapi.com/api/activity/')
            .then(response => response.json())
            .then(data => {
                
                document.getElementById('work').innerHTML = `${c} . ${data.activity}`;
                document.getElementById('type').innerHTML = `Type: ${data.type}`;
                c++;

            })
       
            
        }
        doSomething();

        setInterval(() => {
            doSomething();
           
        },1000);

