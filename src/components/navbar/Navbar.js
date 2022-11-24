import "./Navbar.css";
import SearchInput from "../serach-input/Search";
import Logo from "../logo/Logo";
import Icon from "../icon-group/Icon";
import Layout from "../layout/Layout";

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <Layout>
                <div className="nav-flow">
                    <Logo />
                    <SearchInput />
                    <Icon />
                </div>
            </Layout>
        </nav>
    );
}
