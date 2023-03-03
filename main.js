const submitButton = document.getElementById('submit-button');
const identifier = document.getElementById('identifier');
const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');

submitButton.addEventListener('click', (e) => {
    if (identifier.value && startDate.value && endDate.value) {
        fetch(`https://sk2the05oe.execute-api.ap-northeast-2.amazonaws.com/Prod/icalGenerate?identifier=${identifier.value}&startDate=${startDate.value}&endDate=${endDate.value}`, {
            method: 'GET',
            headers: {
                'x-api-key' : 'API_KEY'
            }
        })
    } else {
        if (!identifier.value) {
            identifier.classList.add('is-danger');
        }
        if (!startDate.value) {
            startDate.classList.add('is-danger');
        }
        if (!endDate.value) {
            endDate.classList.add('is-danger');
        }
    }
});

const validation = (e) => {
    if (identifier.value) {
        identifier.classList.remove('is-danger');
    }
    if (startDate.value) {
        startDate.classList.remove('is-danger');
    }
    if (endDate.value) {
        endDate.classList.remove('is-danger');
    }
}

identifier.addEventListener('change', validation);
startDate.addEventListener('change', validation);
endDate.addEventListener('change', validation);
