let sectionDiv = document.querySelectorAll('section div');
let articleDiv = document.querySelectorAll('article div');
let numberOfRequest = 0;
let countA = 0, countB = 0, countC = 0, countD = 0;
let hasSelected = false;

// function fillContent() {
//     for (i = 0; i < articleDiv.length; i++) {
//         articleDiv[i].innerHTML = content[i];
//     }
// }
// fillContent();
function countMe1(){
    return alert('submitting');
}
function countMe(item) {
    if (!hasSelected) {
        if (item === "a") {
            switch (countA) {
                case 0:
                    sectionDiv[0].classList.add('class0');
                    break;
                case 1:
                    sectionDiv[0].classList.add('class1');
                    break;
                case 2:
                    sectionDiv[0].classList.add('class2');
                    break;
                case 3:
                    sectionDiv[0].classList.add('class3');
                    break;
            }
            countA++;
            //hasSelected = true;
        } else if (item === "b") {
            switch (countB) {
                case 0:
                    sectionDiv[1].classList.add('class0');
                    break;
                case 1:
                    sectionDiv[1].classList.add('class1');
                    break;
                case 2:
                    sectionDiv[1].classList.add('class2');
                    break;
                case 3:
                    sectionDiv[1].classList.add('class3');
                    break;
            }
            countB++;
            //hasSelected = true;
        } else if (item === "c") {
            switch (countC) {
                case 0:
                    sectionDiv[2].classList.add('class0');
                    break;
                case 1:
                    sectionDiv[2].classList.add('class1');
                    break;
                case 2:
                    sectionDiv[2].classList.add('class2');
                    break;
                case 3:
                    sectionDiv[2].classList.add('class3');
                    break;
            }

            countC++;
            // hasSelected = true;
        } else if (item === "d") {
            switch (countD) {
                case 0:
                    sectionDiv[3].classList.add('class0');
                    break;
                case 1:
                    sectionDiv[3].classList.add('class1');
                    break;
                case 2:
                    sectionDiv[3].classList.add('class2');
                    break;
                case 3:
                    sectionDiv[3].classList.add('class3');
                    break;
            }

            countD++;
            //hasSelected = true;
        }
        else {
            alert('you have already voted!!!')
        }


        console.log(`A: ${countA} B: ${countB} C: ${countC} D ${countD}`)
	    return 'this is test.js';
    }
}
