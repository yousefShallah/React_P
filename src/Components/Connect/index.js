import React from 'react';
import {CotentSection, ContentTittle, ContentTittleSpan, InputEmail, InputName,
    InputSubject,InputSubmit, Form, FormInput, TextArea} from './style.js';


const Connect = () =>{

    return(
        <CotentSection>
        <div class="container">
            <ContentTittle><ContentTittleSpan>Send </ContentTittleSpan>To Me A Massege</ContentTittle>
            <Form>
                <FormInput>
                    <InputName type="text" placeholder="Your Name"/>
                    <InputEmail type="email" placeholder="Your Email"/>
                </FormInput>
                <InputSubject type="text" class="sub" placeholder="Your Subject"/>
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <InputSubmit type="submit" value="Send Message"/>
            </Form>
        </div>
    </CotentSection>
    )
}
export default Connect;