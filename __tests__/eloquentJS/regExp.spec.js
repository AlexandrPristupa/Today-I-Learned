import { escapeHtml } from './../../javascript/eloquentJS/regExp';

describe('testing escapeHtml', () => {
  it('should be return encode string', () => {
    expect(escapeHtml('<script>alert("123")</script>')).toEqual('&lt;script&gt;alert(&quot;123&quot;)&lt;&#x2F;script&gt;');
  });
});
