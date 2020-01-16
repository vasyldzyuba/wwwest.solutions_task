app.controller('loginCtrl', function ($http) {
    let vm = this;

    
    vm.loginData = []; //user login array
    vm.login = null;  //login input
    vm.password = null; //password input

    if(localStorage.getItem('user_data') == null){  //if local storage is empty -> make array empty too
        vm.loginData = [];
    }

     //sign in button
    vm.submit = function () { 
        if (vm.login != 'admin' || vm.password != 12345) {
            Swal.fire({ //nice alert
                icon: 'error',
                title: 'Oops...',
                text: 'The username or password you entered is incorrect!'
            })
            vm.login = "";
            vm.password = "";
        }
        else if (vm.loginData.length == 0) {
            vm.loginData.push({
                loginName: vm.login,
                password: vm.password
            })
            window.location.href = "#!/profile";
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "You've loggined successfully!",
                showConfirmButton: false,
                timer: 1300
            })
            vm.login = "";
            vm.password = "";

            //set data into local storage
            vm.stringifyItem = angular.toJson(vm.loginData);
            vm.addToLocal = localStorage.setItem('user_data', vm.stringifyItem);
        }
    }
})
