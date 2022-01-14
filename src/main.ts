import './style.css'
import { start } from "@thi.ng/hdom";

// stateless component w/ params
// the first arg is an auto-injected context object
// (not used here, see dedicated section in readme further below)
const greeter = (_: any, name: string) => ["h1.title", "Hello ", name];

// Syntax explanation:
// ["b", "Hello"] === <b>Hello</b>
// ["div", ["b", "Hello"]] === <div><b>Hello</b></div>
// ["div.foo#bar"] == <div class="foo" id="bar" />

const onSubmit = (e: Event) => {
  console.log("You tried to submit this form!", e)
  e.preventDefault()
}

const uploadForm = (_: any) =>
  ["section",
   ["h2", "Upload new image"],
   ["form", {"onsubmit": onSubmit},
    ["input", {"type": "file", "name": "image"}],
    ["input", {"type": "submit", "value": "Upload"}]]]

const imageHasBeenUploaded = false

const previousImage = (_: any) =>
  ["p", "Nice pics!"]

const noImageMessage = (_: any) =>
  ["p", "Start by picking an image to upload. It will be shown on the connected e-ink displays within the next hour."]

const overview = (_: any) =>
  ["section.overview",
   imageHasBeenUploaded ? previousImage : noImageMessage,
   uploadForm]

const timeline = (_: any) =>
  ["section.timeline",
   ["h2", "Recent Activity"],
   ["ul",
    ["li", "Hannes uploaded an image", ["em", "Jan 14 2021"]],
    ["li", "Arne uploaded an image", ["em", "Jan 12 2021"]],
    ["li", "Hannes uploaded an image", ["em", "Jan 12 2021"]],
    ["li.special", "You uploaded an image", ["em", "Jan 1 2021"]]]]

const app = () => {
    return ["main#app",
            [greeter, "Pau"],
            [overview],
            [timeline]];
};

// start RAF update & diff loop
start(app(), { root: document.body });
