class Interactable 
{
    constructor(dialogue)
    {
        changeDialogue(dialogue);
    }

    changeDialogue(dialogue)
    {
        this.dialogue = [];
        for (let i = 0; i < dialogue.size; i++) {
            this.dialogue.push(dialogue[i]);
        }
    }

    
}