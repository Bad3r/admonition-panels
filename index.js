function main() {
    logseq.Editor.registerSlashCommand(
        'Admon - Info',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-info Information')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Tips',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-tips Tips')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Warning',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-warning Warning!')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Failure',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-failure Failure!')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Bug',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-bug Bug')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Quote',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-quote Quote')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - DANGER',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-danger DANGER')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Success',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-success Success')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Question',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-question Question')
        },
    )
    logseq.provideStyle(String.raw`
   /* ======    ADMONITIONS     ====== */

a.tag[data-ref*="admon-"] {
    background: transparent !important;
    border: 0px solid !important;
    font-size: 0px;
}

/* This will hide the bullet for admonition panels */
[data-refs-self*='admon-'] > div > div > a > .bullet-container {
    display: none;
}
/* Hide brackets for page-refs in panels */
[data-refs-self*='admon-'] > div > div > div > div > div > .block-content-inner .page-reference .bracket {
    display: none;
}
/* Hide background colors on page-ref hover */
[data-refs-self*='admon-'] > div > div > div > div > div > .block-content-inner .page-reference:hover {
    background: transparent;
}

/* Create the top bar */
[data-refs-self*='admon-'] > div > div > div > div > div > .block-content-inner {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 12px;
    border-radius: var(--cl-border-minor);
    border-left: 4px solid;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    font-weight: 500;
    border-top-left-radius: 2px;
    margin-top: 5px;
}
/* This will create the body for blocks that contain multiple lines */
[data-refs-self*='admon-'] > div > div > div > div > div .block-body {
    background: var(--ls-tertiary-background-color);
    border-left: 4px solid;
    border-top-left-radius: 0px;
    padding: 15px 10px;
    box-shadow: var(--cl-box-shadow);
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    margin-bottom: 10px;
}
/* Settings for our Icons in the title bar */
a.tag[data-ref*="admon-"]:after {
    display: block;
    font-size: 22px;
    background: transparent !important;
    font-family: 'tabler-icons';
    font-weight: 100;
    position: relative;
    top: 2px;
    margin-right: -4px;
}

/* ===  Panel for Child Blocks  === */
[data-refs-self*="admon-"] > .block-children-container > .block-children-left-border {
    background: transparent;
}
[data-refs-self*="admon-"] > .block-children-container > .block-children {
    border: 0px solid;
}
/* Adjust the first child blocks margin to align with top-bar */
[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block:first-child > .flex {
    margin-top: -4px;
}
[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 {
    background: var(--ls-tertiary-background-color);
    border-left: 4px solid;
    margin-left: 1px;
}
/* Change the style of the last child block */
[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block:last-child > .flex > div.mr-1.flex.flex-row.items-center {
      border-bottom-left-radius: 2px;
}

[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block > .flex {
    margin-top: -5px;
}

[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block > .flex > .block-content-wrapper {
    background: var(--ls-tertiary-background-color);
    margin-left: -8px;
    margin-right: 3px;
    padding: 5px;
}
/* Forces the bullet to fill the height space of the block */
[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block > .flex > div.mr-1.flex.flex-row.items-center {
    height: auto !important;
}

/*          TIPS            */
[data-refs-self*="admon-tips"] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 {
    border-color: rgb(0, 191, 165);
}
[data-refs-self*='admon-tips'] > div > div > div > div > div > .block-content-inner {
    background: rgb(0, 191, 165, 0.1);
    border-left-color: rgb(0, 191, 165);
}
[data-refs-self*='admon-tips'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(0, 191, 165);
}

[data-refs-self*='admon-tips'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(0, 191, 165);
}

a.tag[data-ref="admon-tips"]:after {
    content: "\ec2c";
    color: rgb(0, 191, 165);
}

/*          WARNING            */
[data-refs-self*="admon-warning"] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 {
    border-color: rgb(255, 145, 0);
}
[data-refs-self*='admon-warning'] > div > div > div > div > div > .block-content-inner {
    background: rgb(255, 145, 0, 0.1);
    border-left-color: rgb(255, 145, 0);
}
[data-refs-self*='admon-warning'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(255, 145, 0);
}

[data-refs-self*='admon-warning'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(255, 145, 0);
}

a.tag[data-ref="admon-warning"]:after {
    content: "\ea06";
    color: rgb(255, 145, 0);
}

/*          INFO            */
[data-refs-self*="admon-info"] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 {
    border-color: rgb(0, 184, 212);
}
[data-refs-self*='admon-info'] > div > div > div > div > div > .block-content-inner {
    background: rgb(0, 184, 212, 0.1);
    border-left-color: rgb(0, 184, 212);
}
[data-refs-self*='admon-info'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(0, 184, 212);
}

[data-refs-self*='admon-info'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(0, 184, 212);
}

a.tag[data-ref="admon-info"]:after {
    content: "\eac5";
    color: rgb(0, 184, 212);
}

/*          SUCCESS            */
[data-refs-self*="admon-success"] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 {
    border-color: rgb(0, 200, 83);
}
[data-refs-self*='admon-success'] > div > div > div > div > div > .block-content-inner {
    background: rgb(0, 200, 83, 0.1);
    border-left-color: rgb(0, 200, 83);
}
[data-refs-self*='admon-success'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(0, 200, 83);
}

[data-refs-self*='admon-success'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(0, 200, 83);
}

a.tag[data-ref="admon-success"]:after {
    content: "\ea5e";
    color: rgb(0, 200, 83);
}

/*          QUESTION            */
[data-refs-self*="admon-question"] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 {
    border-color: rgb(100, 221, 23);
}
[data-refs-self*='admon-question'] > div > div > div > div > div > .block-content-inner {
    background: rgb(100, 221, 23, 0.1);
    border-left-color: rgb(100, 221, 23);
}
[data-refs-self*='admon-question'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(100, 221, 23);
}

[data-refs-self*='admon-question'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(100, 221, 23);
}

a.tag[data-ref="admon-question"]:after {
    content: "\ec9d";
    color: rgb(100, 221, 23);
}

/*          FAILURE            */
[data-refs-self*="admon-failure"] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 {
    border-color: rgb(255, 82, 82);
}
[data-refs-self*='admon-failure'] > div > div > div > div > div > .block-content-inner {
    background: rgb(255, 82, 82, 0.1);
    border-left-color: rgb(255, 82, 82);
}
[data-refs-self*='admon-failure'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(255, 82, 82);
}

[data-refs-self*='admon-failure'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(255, 82, 82);
}

a.tag[data-ref="admon-failure"]:after {
    content: "\eb55";
    color: rgb(255, 82, 82);
}

/*          DANGER            */
[data-refs-self*="admon-danger"] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 {
    border-color: rgb(255, 23, 68);
}
[data-refs-self*='admon-danger'] > div > div > div > div > div > .block-content-inner {
    background: rgb(255, 23, 68, 0.1);
    border-left-color: rgb(255, 23, 68);
}
[data-refs-self*='admon-danger'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(255, 23, 68);
}

[data-refs-self*='admon-danger'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(255, 23, 68);
}

a.tag[data-ref="admon-danger"]:after {
    content: "\ec2f";
    color: rgb(255, 23, 68);
}

/*          BUG            */
[data-refs-self*="admon-bug"] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 {
    border-color: rgb(245, 0, 87);
}
[data-refs-self*='admon-bug'] > div > div > div > div > div > .block-content-inner {
    background: rgb(245, 0, 87, 0.1);
    border-left-color: rgb(245, 0, 87);
}
[data-refs-self*='admon-bug'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(245, 0, 87);
}

[data-refs-self*='admon-bug'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(245, 0, 87);
}

a.tag[data-ref="admon-bug"]:after {
    content: "\ea48";
    color: rgb(245, 0, 87);
}

/*          QUOTE            */
[data-refs-self*="admon-quote"] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 {
    border-color: rgb(158, 158, 158);
}
[data-refs-self*='admon-quote'] > div > div > div > div > div > .block-content-inner {
    background: rgb(158, 158, 158, 0.1);
    border-left-color: rgb(158, 158, 158);
}
[data-refs-self*='admon-quote'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(158, 158, 158);
}

[data-refs-self*='admon-quote'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(158, 158, 158);
}

a.tag[data-ref="admon-quote"]:after {
    content: "\efbe";
    color: rgb(158, 158, 158);
}

    `);
}

// bootstrap
logseq.ready(main).catch(console.error)
