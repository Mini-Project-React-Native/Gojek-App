import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { ArrowRight, HlpAam, HlpAcf, HlpAg, HlpAi, HlpApm, HlpFat, HlpGc, HlpGfAts, HlpGfBwh, HlpGp, HlpGpls, HlpGr, HlpGs, HlpGsp, HlpGt, HlpJaop, HlpOh, HlpOs, HlpPl, HlpSae } from '../../../assets/icon';


class HelpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <View style={{borderBottomWidth: 1, borderBottomColor: '#f2f2f2', height: 65, justifyContent: 'center'}}>
                    <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Help</Text>
                </View>
                <ScrollView>
                    <TouchableOpacity style={{marginTop: 10, paddingHorizontal: 16}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'green'}}>Any issues with your last order?</Text>
                    </TouchableOpacity>
                    <View style={{height: 100, position: 'relative', justifyContent: 'center', marginHorizontal: 16}}>
                        <Image source={HlpGfAts} style={{position: 'absolute', left: 0, height: 50, width: 50}} />
                        <Text style={{paddingLeft: 70, fontSize: 20, fontWeight: 'bold'}}>Jl. Mangga No.1</Text>
                        <Text style={{paddingLeft: 70, fontSize: 18, fontWeight: 'bold'}}>Food delivered</Text>
                        <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                    </View>
                    <TouchableOpacity style={{borderTopColor: 'grey', borderTopWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                        <Image source={HlpOh} style={{left: 16, position: 'absolute', height: 37, width: 37}} />
                        <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 61}}>Order history</Text>
                        <Image source={ArrowRight} style={{right: 16, position: 'absolute', height: 20, width: 20}} />
                    </TouchableOpacity>
                    <View style={{height: 20, width: '100%', backgroundColor: '#f2f2f2'}} />
                    <View style={{marginTop: 20, paddingHorizontal: 16}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>All topics</Text>
                        <View>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpFat} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>Frequently asked topics</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpSae} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>Safety and Emergency</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpAam} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>About Account Menu</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpAi} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>App issue</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpGp} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>GoPay</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpPl} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>PayLater</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpGfBwh} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>GoFood</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpGr} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>GoRide</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpGc} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>GoCar</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpGs} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>GoSend</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpGsp} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>GoShop</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpGpls} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>GoPulsa</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpGt} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>GoTagihan</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpOs} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>Other Services</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpApm} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>About Promo Menu</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpAcf} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>About Chat Feature</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpJaop} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>Join as Our Partner</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '100%', height: 70, alignSelf: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Image source={HlpAg} style={{left: 0, position: 'absolute', height: 37, width: 37}} />
                                <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold', color: 'black', paddingLeft: 45}}>About Gojek</Text>
                                <Image source={ArrowRight} style={{right: 0, position: 'absolute', height: 20, width: 20}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
 
export default HelpPage;