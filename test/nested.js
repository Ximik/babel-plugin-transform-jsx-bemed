const { assertTransform } = require('./common');

assertTransform(
`<div block="message">
  <h1 elem="title">{ title }</h1>
  <div elem="message" mods={{ error }}>{ message }</div>
</div>;`,
`<div className={_bem("message")}>
  <h1 className={_bem("message", "title")}>{title}</h1>
  <div className={_bem("message", "message", { error })}>{message}</div>
</div>;`
);

assertTransform(
`<div block="message">
  <h1 block="title">{ title }</h1>
  <div elem="message" mods={{ error }}>{ message }</div>
</div>;`,
`<div className={_bem("message")}>
  <h1 className={_bem("title")}>{title}</h1>
  <div className={_bem("message", "message", { error })}>{message}</div>
</div>;`
);
