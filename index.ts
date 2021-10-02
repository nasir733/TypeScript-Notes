// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// Basic Types

let id: number = 5;
let company: string = ' Traversy Media ';
let isPublished: boolean = true;
let x: any = 'Hello';
x = true;
let age: number;
age = 30;
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'HELL'];

// Tuple
let person: [number, string, boolean] = [1, 'nasir', true];
