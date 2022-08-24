import React, { useState } from 'react'
import '../App.css'
import filter from '../assets/filter.png'
import down from '../assets/down.png'
import disaster from '../assets/bridge-collapse.webp'
import Ldisaster from '../assets/long-disaster.png'
import { MasonryGrid } from '@egjs/react-grid'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const Incidents = () => {
    const [ModalVisible, setModalVisible] = useState(false);
    const [type,setType] = useState([]);
    const [status,setStatus] = useState({});

    const optionTypes = [
        { value : 'flood',label:'Flood'},
        { value : 'earthquake',label:'Earthquake'},
        { value : 'landslide',label:'Landslide'},
        { value : 'forestfire',label:'Forest Fire'}
    ];
    const optionStatus = [
        { value : 'flood',label:'Flood'},
        { value : 'flood',label:'Flood'},
        { value : 'flood',label:'Flood'},
        { value : 'flood',label:'Flood'}
    ];

    

    const customTheme = (theme) =>{
        return{
            ...theme,
            colors:{
                ...theme.colors,
                primary25: '#00DCE6',
                primary: 'black',
            }
        }
    }

    const colourStyles = {
        control: (base, state) => ({
            ...base,
            background: "#fff",
            borderRadius: "8px 8px 8px 8px",
            borderColor: state.isFocused ? "black" : "darkblue",
            boxShadow: state.isFocused ? "2px 2px #00dce6" : "1px 1px #00dce6",
            "&:hover": {
              borderColor: state.isFocused ? "black" : "black"
            }
          }),
          menu: (base) => ({
            ...base,
            borderRadius: "15px",
            marginTop: "3px"
          }),
          menuList: (base) => ({
            ...base,
            padding: 0,
            borderRadius: "15px"
          }),
        option: (styles, { isDisabled }) => {
          return {
            ...styles,
            color: "black",
            cursor: isDisabled ? "not-allowed" : "default"
          };
        }
      };
    return (
        <>
            <div className='topmargin'></div>
            <section className='filter'>
                <div className='filter-item'>
                    <img className='filter-ico' src={filter}></img>
                    <div className='filter-item-title'>Filters</div>
                </div>
                <div className='filter-item'>
                <Select
                    components={makeAnimated()}
                    theme={customTheme}
                    styles={colourStyles}
                    onChange={setType}
                    options={optionTypes}
                    placeholder="Select disaster type"
                    noOptionsMessage={()=> 'This is not a disaster type'}
                    isSearchable
                    isMulti
                    autoFocus
                />
                    {/* <div className='filter-item-title'>Type</div> */}
                    
                    {/* <img className='filter-icon' src={down}></img> */}
                </div>
                <div className='filter-item'>
                    {/* <div className='filter-item-title'>Status</div>
                    <img className='filter-icon' src={down}></img> */}
                    <Select 
                    components={makeAnimated()}
                    styles={colourStyles}
                    noOptionsMessage={()=> 'This is not a status'}  
                    isMulti
                    autoFocus
                    theme={customTheme}
                    className='filter-item-title'
                    onChange={setStatus}
                    options={optionStatus}
                    placeholder="Select status type"
                    isSearchable
                    
                />
                </div>
                <div className='filter-item'>
                    {/* <div className='filter-item-title'>Data</div>
                    <img className='filter-icon' src={down}></img> */}
                    <Select 
                    components={makeAnimated()}
                    styles={colourStyles}
                    noOptionsMessage={()=> 'This is not a status'}  
                    isMulti
                    autoFocus
                    theme={customTheme}
                    className='filter-item-title'
                    onChange={setStatus}
                    options={optionStatus}
                    placeholder="Select status type"
                    isSearchable
                    
                />
                </div>
            </section>
            <div>
                <MasonryGrid
                    className='card-container'
                    gap={20}
                    defaultDirection={'end'}
                    align={'center'}
                    column={0}
                    columnSize={0}
                    columnSizeRatio={0}
                >
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={disaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <div className='button-section'>Take Action</div>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={Ldisaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <button
                            className='button-section'
                            onClick={() => setModalVisible(true)}
                        >
                            Take Action
                        </button>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={disaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <div className='button-section'>Take Action</div>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={disaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <div className='button-section'>Take Action</div>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={disaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <div className='button-section'>Take Action</div>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={disaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <div className='button-section'>Take Action</div>
                    </div>
                    <div className='card'>
                        <div className='card-top-section'>
                            <div className='status'>
                                <div
                                    className='status-color'
                                    style={{ backgroundColor: 'blueviolet' }}
                                ></div>
                                <div className='status-text'>In Progress</div>
                            </div>
                            <div className='dollar'>$$</div>
                        </div>
                        <div className='media-container'>
                            <img className='media' src={disaster}></img>
                        </div>
                        <div className='headline-section'>
                            <p className='time'>12:57 PM</p>
                            <h6 className='headline'>
                                Railway bridge in Himachal collapses amid floods
                            </h6>
                        </div>
                        <div className='button-section'>Take Action</div>
                    </div>
                    {/* <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        1
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        2
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        3
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        4
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        1
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        2
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        3
                    </div>
                    <div
                        className={'item'}
                        style={{
                            height: Math.random() * 400 + 'px',
                        }}
                    >
                        4
                    </div> */}
                </MasonryGrid>
            </div>
        </>
    )
}

export default Incidents;
