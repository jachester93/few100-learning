import { add } from './math';
import './styles.css';

const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const addButton = document.getElementById('add') as HTMLInputElement;
const answer = document.getElementById('answer') as HTMLSpanElement;

// console.log({
//     num1,
//     num2,
//     addButton,
//     answer
// });

// console.log(num1.valueAsNumber);

addButton.addEventListener('click', handleAddClick);

function handleAddClick() {
    const a = num1.valueAsNumber;
    const b = num2.valueAsNumber;
    const sum = add(a, b);
    answer.innerText = sum.toString();
    num1.focus();
}
