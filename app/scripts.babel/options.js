class OptionsCtl {

    save() {
        chrome.storage.sync.set({
            protocol: document.getElementById('protocol').value,
            address: document.getElementById('address').value,
            port: document.getElementById('port').value,
            name: document.getElementById('name').value,
            password: document.getElementById('password').value
        }, function () {
            window.close();
        });
    }

    restore() {
        chrome.storage.sync.get({
            protocol: 'http',
            address: 'localhost',
            port: '8000',
            name: '',
            password: ''
        }, function (items) {
            document.getElementById('protocol').value = items.protocol;
            document.getElementById('address').value = items.address;
            document.getElementById('port').value = items.port;
            document.getElementById('name').value = items.name;
            document.getElementById('password').value = items.password;
            console.log('reload');
        });
    }
}

let optionCtl = new OptionsCtl();
document.addEventListener('DOMContentLoaded', optionCtl.restore);
document.getElementById('save').addEventListener('click', optionCtl.save);