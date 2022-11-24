import "./Layout.css";

export default function Layout({ children }) {

    return (
        <section className="layout">
            <div className='container'>
                {children}
            </div>
        </section>
    )
}
