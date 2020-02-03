import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/tic-tac-toe.module.scss"

class Square extends React.Component {
    render() {
        return (
            <button className={styles['square']}>
                {/* TODO */}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square />
    }

    render() {
        const status = "Next Player: X"
        return (
            <div>
                <div className={styles['status']}>{ status }</div>
                <div className={styles['board-row']}>
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className={styles['board-row']}>
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className={styles['board-row']}>
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className={styles['game']}>
                <div className={styles['game-board']}>
                    <Board />
                </div>
                <div className={styles['game-info']}>
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}

export default Game