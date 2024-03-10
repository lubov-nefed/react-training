import { Logo } from "../Logo/Logo";
import { Container } from "../Container/Container";

function Header() {
    return(
        <header className="header">
            <Container><Logo/></Container>
        </header>
    )
}

export { Header }