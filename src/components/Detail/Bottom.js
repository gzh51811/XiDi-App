import React from 'react'

class Bottom extends React.Component {
    constructor(){
        super();
        this.state = {
            dis : ""
        }
    }

    componentDidMount(){
        console.log(this.refs.part2.offsetHeight);
        this.setState({
            dis : this.refs.part2.offsetHeight
        })
    }

    render() {
        let {deltaY} = this.props;
        return (
            <div data-v-08814b0b="" id="part2" className="part2"
                 style={{transition: "transform 400ms linear 0s", transform: `translateY(${this.state.dis + deltaY}px)`}} ref='part2' >
                <div data-v-08814b0b="" className="commodity_details clearfix">
                    <div data-v-08814b0b="" className="derail_nav_cont clearfix">
                        <div data-v-08814b0b="" className="detail-detail eshow clearfix">
                            <h1>bottom</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bottom;