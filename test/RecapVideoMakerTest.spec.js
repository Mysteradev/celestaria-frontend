import { mount } from "@vue/test-utils";
import { describe, it } from "@jest/globals";
import RecapVideoMaker from "@/components/videoMaker/RecapVideoMaker.vue";

describe('RecapVideoMakerTest', () => {
  const wrapper = mount(RecapVideoMaker);


  it('Should test if small text indicator is displayed if title is under 3 chars', () => {
    wrapper.setData({inputContent: " ".repeat(3)});
    expect(wrapper.find('#filmTitleIndicator').element.style.display).toBe('');
  });


  it('Should test if small text indicator is displayed if title has more than 3 chars', () => {
    wrapper.setData({inputContent: "Une superbe histoire"});
    expect(wrapper.find('#filmTitleIndicator').element.style.display).toBe('none');
  });

  it('Should test if the button is deactivated when only title is < 3 chars', () => {
    wrapper.setData({inputContent: " ".repeat(3)});
    expect(wrapper.find('.button').element.hasAttribute('disabled')).toBeTruthy();
  });

  it('Should test if the button is deactivated when only the conditions are checked', () => {
    wrapper.setData({hasAcceptedCondition: true});
    expect(wrapper.find('.button').element.hasAttribute('disabled')).toBeTruthy();
  });

  it('Should test if the button is activated when title > 3 and conditions are checked', () => {
    wrapper.setData({inputContent: "Une superbe histoire", hasAcceptedCondition: true});
    expect(wrapper.find('.button').element.hasOwnProperty('disabled')).toBe(false);
  })
});
