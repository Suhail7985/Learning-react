// export default function Home(props){
export default function Home({name, age}) {
    let a = 10;
    return ( 
    <div>
        {/* <h3>welcome {props.name},{props.age}</h3>  */}

        <h4>welcome {name},{age},{a}</h4>
        </div>
    )
}