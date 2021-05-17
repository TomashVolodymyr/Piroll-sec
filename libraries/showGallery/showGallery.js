
// Instruction
// 1. init your block adding class initLdGall
// 2. add horizontal blocks amount amtWidth - type: number
// 3. add vertical blocks amount amtHeight - type: number
// 4. init your  button with its class you added > pass it as argument initBl - type: string
// 5. add inside your two blocs with classes .showMore and .showLess and put your content there
// 6. add height style to your LoadGallery items
// 7. add width to your LoadGallery init block - optional
// 8. add class .load-gall__innItems to inner items of init block
// 9. init block is flex, flew-wrap: wrap


//launch this function with arguments
function LoadGallery( amtWidth, amtHeight, bthClass) {
    let initMainBl = document.querySelector('.initLdGall');
    let innerItems = initMainBl.querySelectorAll('.load-gall__innItems');
    let btn = document.querySelector(bthClass);
    let allowItems = amtWidth * amtHeight;
    let showAll = false;


// hide all elements except allowed elements
    let hideElms = function (allowAmt, allItems) {
        for (let i = 0; i < allItems.length; i++) {
            allItems[i].classList.remove('hide');
            if (i >= allowAmt) {
                allItems[i].classList.add('hide');
            }
            // console.log(allowAmt)
        }
    }


    let toShow = function (isShow, button, allowAmt, allItems, hideFunc) {
        let showMoreText = btn.querySelector('.showMore');
        let showLessText = btn.querySelector('.showLess');

        if (isShow === false) {

            if (!showLessText.classList.contains('hide')) {
                showLessText.classList.add('hide')
            }
            hideFunc(allowAmt, allItems);
            // button.scrollIntoView(false);
            if (showMoreText.classList.contains('hide')) {
                showMoreText.classList.remove('hide')
            }
            return
        }
        if (isShow === true) {
            if (!showMoreText.classList.contains('hide')) {
                showMoreText.classList.add('hide')
            }
            hideFunc(allItems.length, allItems);
            if (showLessText.classList.contains('hide')) {
                showLessText.classList.remove('hide')
            }
        }
    }

//set width to inner elem
    for (var i = 0; i < innerItems.length; i++) {
        innerItems[i].style.width = (100 / amtWidth) + '%';
    }


    toShow(showAll, btn, allowItems, innerItems, hideElms);

    btn.addEventListener('click', function (event) {
        showAll = !showAll;
        toShow(showAll, btn, allowItems, innerItems, hideElms);
    });
}
