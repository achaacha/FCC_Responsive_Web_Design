let x = 1;
let trigger = false;

function swapSectionsF() {
    $(`section:nth-of-type(${x})`).style.display = "none";

    if (x === 1) {

        x++;
        $(`section:nth-of-type(${x}) div:nth-of-type(1)`).style.display = "block";

    } else if (x === 2 && trigger === false) {
        trigger = true;

        $(`section:nth-of-type(${x}) div:nth-of-type(1)`).style.display = "none";
        $(`section:nth-of-type(${x}) div:nth-of-type(2)`).style.display = "block";

    } else if (x === 2 && trigger === true) {
        trigger = false;

        $(`section:nth-of-type(${x}) div:nth-of-type(2)`).style.display = "none";
        x++;
        $(`section:nth-of-type(${x})`).style.display = "block";

        return trigger;

    } else if (x === 3) {

        $(`section:nth-of-type(${x})`).style.display = "none";
        x = 1;
        $(`section:nth-of-type(${x})`).style.display = "block";

    }


    $(`section:nth-of-type(${x})`).style.display = "block";
    return x;

}

function swapSectionsB() {
    $(`section:nth-of-type(${x})`).style.display = "none";

    if (x === 1) {
        x = 3;
    } else if (x === 2 && trigger === false) {
        x--;
    } else if (x === 2 && trigger === true) {

        trigger = false;

        $(`section:nth-of-type(${x}) div:nth-of-type(2)`).style.display = "none";
        $(`section:nth-of-type(${x}) div:nth-of-type(1)`).style.display = "block";

    } else if (x === 3) {

        trigger = true;
        x--;

        $(`section:nth-of-type(${x})`).style.display = "block";
        $(`section:nth-of-type(${x}) div:nth-of-type(1)`).style.display = "none";
        $(`section:nth-of-type(${x}) div:nth-of-type(2)`).style.display = "block";

        return trigger;
    }

    $(`section:nth-of-type(${x})`).style.display = "block";

    return x;
}

/*---------
| Listen   |
----------*/
$('.btn.right').addEventListener('click', swapSectionsF);
$('.btn.left').addEventListener('click', swapSectionsB);