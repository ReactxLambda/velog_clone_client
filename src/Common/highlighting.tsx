const highlighting = (str : string, lang : string, hljs : any, markdown : any) => {
    if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
                 hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                 '</code></pre>';
        } catch (__) {}
      }
      return '<pre class="hljs"><code>' + markdown.utils.escapeHtml(str) + '</code></pre>';
}

export default highlighting;