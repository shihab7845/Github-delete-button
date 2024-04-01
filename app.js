// part_1 ===> work with input field

    // 1.1(get the input value)
    document.getElementById('written-value').addEventListener('keyup', function (event) {
        const textx = event.target.value;
        // 1.2(active or deactive delete button )
        const deleteButton = document.getElementById('btn-delete');
        if (textx === 'delete') {
            deleteButton.removeAttribute('disabled');
        } else {
            deleteButton.setAttribute('disabled', 'disabled');
        }
    }); 

    // part_2 ===> delete mechanism 

    // 2.1(clear heading)
    document.getElementById('btn-delete').addEventListener('click', function () {
        const headx = document.getElementById('comment-head');
        headx.innerText = '';

        // 2.2(clear inputfield text)
        const textxy = document.getElementById('written-value');
        const textxyz = textxy.value;
        textxy.value = '';
    });