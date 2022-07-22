    import React from "react";

    export default class ClassComponent extends React.Component {
    state = {
        loading: false,
        todos: [],
        posts: [],
        todo: null,
        status: "todos",
    };

    componentDidMount() {
        this.getTodos();
        this.getPosts();
    }
    
// ### todo datasını çekiyoruz
    getTodos = () => {
        this.setState({ loading: true });
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((x) => x.json())
        .then((response) => {
            this.setState({ todos: response, loading: false });
        })
        .catch((e) => {
            this.setState({ loading: false });
        });
    };

    // ### post datasını çekiyoruz
    getPosts = () => {
        this.setState({ loading: true });
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((x) => x.json())
        .then((response) => {
            this.setState({ posts: response, loading: false });
        })
        .catch((e) => {
            this.setState({ loading: false });
        });
    };

    //### todoları tabloya yazdırıyoruz

    renderBody = () => {
        return (
        <React.Fragment>
            {this.state.todos.map((item, i) => {
            return (
                <tr  key={i}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.completed ? "Tamamlandı" : "Yapılacak"}</td>
                <td>
                    <button className="btn btn-xs btn-danger">Sil</button>
                    <button className="btn btn-xs btn-warning">Düzenle</button>
                </td>
                </tr>
            );
            })}
        </React.Fragment>
        );
    };

    // ### todo tablo baslık kısmını yazdırıyoruz ve todo tablosunu gösteriyoruz 

    renderTable = () => {
        return (
        <>
        <div className="todoAndPostDiv">
            <table id="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Başlık</th>
                <th scope="col">Durum</th>
                <th scope="col">Aksiyonlar</th>
                </tr>
            </thead>
            <tbody>{this.renderBody()}</tbody>
            </table>
            </div>
        </>
        );
    };

    //   ############################################


    // ### postları yazdırıyoruz"
    renderBodyP = () => {
        return (
        <React.Fragment>
            {this.state.posts.map((item, i) => {
            return (
                <tr key={i}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.body}</td>
                </tr>
            );
            })}
        </React.Fragment>
        );
    };


    // ### post butonuna tıklandığında post tablosunu gösteriyoruz
    renderTableP = () => {
        return (
        <>
        <div className="todoAndPostDiv">
            <table id="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Başlık</th>
                <th scope="col">İçerik</th>
                </tr>
            </thead>
            <tbody>{this.renderBodyP()}</tbody>
            </table>
            </div>
        </>
        );
    };

    renderStatus = () => {
        if (this.state.status === "todos") {
        return this.renderTable();
        } else return this.renderTableP();
    };
    clickTodos = () => {
        this.setState({ status: "todos" });
    };

    clickPost = () => {
        this.setState({ status: "post" });
    };



// ### render işlemi yapıyoruz ve burada TODO ve POST arası geçişi sağlıyoruz


    render() {
        const { loading } = this.state;





        return (
        <div className="container ">
            <div className="buttons ">
            
                <button
                onClick={this.clickTodos}
                className=" btn-success"
                >
                Class Todos Component
                </button>
                <button
                onClick={this.clickPost}
                className=" btn-success"
                >
                Class Post Component
                </button>
            </div>

            {loading ? "Loading..." : this.renderStatus()}
            </div>
        
        );
    }
    }
