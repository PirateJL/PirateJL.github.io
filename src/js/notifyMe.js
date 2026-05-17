console.log('debug: notifyMe.js');
const Notify = {
    send: function (infoObj) {
        alert("Service not working on GitHub pages.");

        const elementIds = [
            'contactInputName',
            'contactInputEmail',
            'contactInputSubject',
            'contactInputMsg',
        ];

        elementIds.forEach(id => {
            const element = document.getElementById(id);
            element.value = '';
        });
    }
}