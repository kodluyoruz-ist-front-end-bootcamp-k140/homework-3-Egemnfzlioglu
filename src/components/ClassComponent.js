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

    renderTable = () => {
        return (
        <>
            <table className="table table-bordered border-primary text-success">
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
        </>
        );
    };

    //   ############################################

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

    renderTableP = () => {
        return (
        <>
            <table className="table table-bordered border-primary text-success">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Başlık</th>
                <th scope="col">İçerik</th>
                </tr>
            </thead>
            <tbody>{this.renderBodyP()}</tbody>
            </table>
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
    render() {
        const { loading } = this.state;

        return (
        <div className="container ">
            <div className="container ">
            <div
                className="btn-group tabs d-flex justify-content-center m-3"
                role="group"
                aria-label="Basic example"
            >
                <button
                onClick={this.clickTodos}
                className=" col m-2 btn btn-success"
                >
                Class Todos Component
                </button>
                <h1 className="mx-5"></h1>
                <button
                onClick={this.clickPost}
                className=" col m-2 btn btn-success"
                >
                Class Post Component
                </button>
            </div>

            {loading ? "Loading..." : this.renderStatus()}
            </div>
        </div>
        );
    }
    }
