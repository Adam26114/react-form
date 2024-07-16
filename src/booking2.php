<!DOCTYPE html>
<html lang="en">




<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/reactdom@18/umd/react-dom.development.js"></script>
<script src="https://cdn.tailwindcss.com"></script>

<div id="root"></div>
<!-- <script type="text/javascript">
    'use strict';

    const e = React.createElement;

    class LikeButton extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                liked: false
            };
        }

        render() {
            if (this.state.liked) {
                return 'You liked this.';
            }

            return e(
                'button', {
                    onClick: () => this.setState({
                        liked: true
                    })
                },
                'Like'
            );
        }
    }
    const domContainer = document.querySelector('#like_button_container');
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(LikeButton));
</script> -->

<script type="text/babel">
    // Define a component called Greetings
  function Greetings() {
    return <h1 class="text-red-300">Hello readers</h1>;
  }

  // Render the component to the DOM
  ReactDOM.render(
    <Greetings />,
    document.getElementById("root")
  );
</script>

<script type="module">
    import React, {
        useState
    } from 'https://unpkg.com/react@18/umd/react.development.js';
    import ReactDOM from 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';

    const LikeButton = () => {
        const [liked, setLiked] = useState(false);

        if (liked) {
            return <p> You liked this. </p>;
        }

        return ( <button onClick = {
                () => setLiked(true)
            } >
            Like </button>
        );
    };

    const domContainer = document.querySelector('#like_button_container');
    const root = ReactDOM.createRoot(domContainer);
    root.render( <LikeButton / > );
</script>