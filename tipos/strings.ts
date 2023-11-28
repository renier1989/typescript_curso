(()=>{

    const batman: string = 'Batman'
    const superman: string = "SuperMan"
    const aquaman : string = `Aquaman`

    console.log(` I'm ${batman}`);
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No se puede hacer esto!');
    
})()