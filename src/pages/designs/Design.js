import React, { Component} from 'react'
import Header from "../../components/header/Header";
import { Fade } from "react-reveal";
import "./design.css"
import ReactPlayer from 'react-player'
import Button from "../../components/button/Button";

var listOfPosters =[];
var listOfVideos =[];
var listOfLogos =[];
var listOfAdobeImgs =[];

class Design extends Component {
    constructor() {
        super();
        this.state = {
            showPosters: true,
            showVideos: false,
            showLogos: false,
            showAdobe: false
        }
    }
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfPosters = this.importAll(require.context('../../assests/designs/posters/', false, /\.(png|jpe?g|svg)$/));
        listOfVideos  = this.importAll(require.context('../../assests/designs/videos/', false, /\.(mp4)$/));
        listOfLogos  = this.importAll(require.context('../../assests/designs/logos/', false, /\.(png|jpe?g|svg)$/));
        listOfAdobeImgs = this.importAll(require.context('../../assests/designs/adobe/', false, /\.(png|jpe?g|svg)$/));

    }
    render() {
        const theme = this.props.theme;
  
            if(this.state.showPosters){
                return (
                    <div className="design-main">   
                
                    <Header theme={theme} />
                        <div className="choice-btns">
                            <Button
                                text={"Posters"}
                                theme={theme}
                                onClick={() => {this.setState({showPosters: true,showVideos:false,showLogos:false});}}
                            />
                            <Button
                                text={"Videos"}
                                theme={theme}
                                onClick={() => {this.setState({showPosters: false,showVideos:true,showLogos:false});}}
                            />
                            <Button
                                text={"Logos"}
                                theme={theme}
                                onClick={() => {this.setState({showPosters: false,showVideos:false,showLogos:true});}}
                            />
                            <Button
                            text={"Adobe"}
                            theme={theme}
                            onClick={() => {this.setState({showPosters: false,showVideos:false,showLogos:false,showAdobe:true});}}
                            />
                        </div> 
                        <div className="posters-container">
                            {listOfPosters.map(
                            (image) =>  {
                                return (
                                    <Fade bottom duration={1000} distance="20px">
                                    <div className="posters">
                                    <img src={image} alt="IEEE IIITS" width="420" height="280"/>
                                    </div>
                                    </Fade>
                                )
                            }
                            )
                            }
                        </div>

                    </div>
                )
                }
                else if (this.state.showVideos){
                    return (
                        <div className="design-main">   
                
                        <Header theme={theme} />
                            <div className="choice-btns">
                                <Button
                                    text={"Posters"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: true,showVideos:false,showLogos:false,showAdobe:false});}}
                                />
                                <Button
                                    text={"Videos"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: false,showVideos:true,showLogos:false,showAdobe:false});}}
                                />
                                <Button
                                    text={"Logos"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: false,showVideos:false,showLogos:true,showAdobe:false});}}
                                />
                                <Button
                                    text={"Adobe"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: false,showVideos:false,showLogos:false,showAdobe:true});}}
                                />
                            </div> 
                        <div className="videos-container">
                            {listOfVideos.map(video => {
                                return (
                                    <div className="video">
                                    <ReactPlayer url={video} playing={false} width="540px" height="360px" controls={true} autoplay={false}/>
                                    </div>
                                )
                            }
                            )
                            }
                        </div>
                        </div>
                    )
                }
                else if(this.state.showLogos){
                    return(
                        <div className="design-main">   
                
                        <Header theme={theme} />
                            <div className="choice-btns">
                                <Button
                                    text={"Posters"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: true,showVideos:false,showLogos:false,showAdobe:false});}}
                                />
                                <Button
                                    text={"Videos"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: false,showVideos:true,showLogos:false,showAdobe:false});}}
                                />
                                <Button
                                    text={"Logos"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: false,showVideos:false,showLogos:true,showAdobe:false});}}
                                />
                                <Button
                                    text={"Adobe"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: false,showVideos:false,showLogos:false,showAdobe:true});}}
                                />
                            </div> 
                        <div className="logos-container">
                            {listOfLogos.map(
                            (logo) =>  {
                                return (
                                    <Fade bottom duration={1000} distance="20px">
                                    <div className="logos">
                                    <img src={logo} alt="Logo" width="200" height="200"/>
                                    </div>
                                    </Fade>
                                )
                            }
                            )
                            }
                        </div>
                        </div>
                    )
                }
                else if(this.state.showAdobe){
                    return(
                        <div className="design-main">   
                
                        <Header theme={theme} />
                            <div className="choice-btns">
                                <Button
                                    text={"Posters"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: true,showVideos:false,showLogos:false,showAdobe:false});}}
                                />
                                <Button
                                    text={"Videos"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: false,showVideos:true,showLogos:false,showAdobe: false});}}
                                />
                                <Button
                                    text={"Logos"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: false,showVideos:false,showLogos:true,showAdobe:false});}}
                                />
                                <Button
                                    text={"Adobe"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: false,showVideos:false,showLogos:false,showAdobe:true});}}
                                />
                            </div> 
                        <div className="logos-container">
                            {listOfAdobeImgs.map(
                            (Img) =>  {
                                return (
                                    <Fade bottom duration={2000} distance="40px">
                                    <div className="logos">
                                    <img src={Img} alt="Logo" width="360" height="360"/>
                                    </div>
                                    </Fade>
                                )
                            }
                            )
                            }
                        </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div className="design-main">
                                
                            <Header theme={theme} />
                            <div className="choice-btns">
                                <Button
                                    text={"Posters"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: true,showVideos:false,showLogos:false,showAdobe:false});}}
                                />
                                <Button
                                    text={"Videos"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: false,showVideos:true,showLogos:false,showAdobe:false
                                    });}}
                                />
                                <Button
                                    text={"Logos"}
                                    theme={theme}
                                    onClick={() => {this.setState({showPosters: false,showVideos:false,showLogos:true,showAdobe:false});}}
                                />
                                <Button
                                text={"Adobe"}
                                theme={theme}
                                onClick={() => {this.setState({showPosters: false,showVideos:false,showLogos:false,showAdobe:true});}}
                                />
                            </div> 
                        </div>
                    )
                }

            
              
        
    }
}

export default Design;