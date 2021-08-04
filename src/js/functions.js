import { questions } from "./questions.js";

const trans_time = 0.5

questions.forEach(q => {
    const item = document.createElement("p");
    q.question_parent.appendChild(item)

    item.className = "question";
    item.innerHTML = q.question;
    item._data = q;

    item.addEventListener('click', function() {
        const answer_item = document.createElement("p");
        answer_item.className = "answer";
        answer_item.innerHTML = this._data.answer;
        
        // const answer = this._data.answer;
        const child = q.answer_parent.lastElementChild;
        if (child) {
            if (child.innerHTML != answer_item.innerHTML) {
                //child.classList.add("hide")
                q.answer_parent.removeChild(child);
                //removeItem(child, trans_time)
                appendItem(answer_item, q.answer_parent, trans_time)
            }
        }
        else {
            appendItem(answer_item, q.answer_parent, trans_time)
        }
    })
})

function appendItem(item, parent_item, seconds) {
    const ms = seconds * 1000;
    item.style.transition = "opacity " + ms + "ms ease";

    item.style.opacity = 0;
    parent_item.appendChild(item)
    setTimeout(function() {
        item.style.opacity = 1;
    }, seconds)
}