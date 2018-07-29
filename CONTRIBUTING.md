# Contribution Guide

You can add a record using any of the following three methods. We have a few methods because this list is displayed both as Markdown on GitHub and on our website.

- Complete PR
  - add record in [README](https://github.com/opensourcecities/montreal/blob/master/README.md) AND
  - add record's `yml` definition (based on [Type of Records](#type-of-records)) in `content` folder, in a `.md` file.
- Partial PR
  - add record in [README](https://github.com/opensourcecities/montreal/blob/master/README.md) OR
  - add record's `yml` definition (based on [Type of Records](#type-of-records)) in `content` folder, in a `.md` file.
- Addition Request
  - [Open a new issue](https://github.com/opensourcecities/montreal/issues/new) and provide information for the record you want to add

> Note that if you want to send a "Partial PR" you need to check **Allow edits from maintainers** checkbox while creating the PR, so that we will be able to complete the PR and merge it.

## Type of Records

- [Organization](#organization)
- [User](#user)
- [Project](#project)
- [Incubator, School, Community](#incubator-school-community)
- [Other](#other)

## Organization

Create new record file with `./hugow new organizations/<filename>.md`, where `filename` must be lowercase alphanumeric. No special character is allowed except hyphen (`-`) and underscore (`_`). It is recommended to use the name of Github organization's account for `filename`. Then edit the newly created file with your information at:

`content/organizations/<filename>.md`

```yml
---
name: "Foo Org"                                           # (required) alphanumeric with spaces
github: "FooOrg"                                          # (required) github-account-without-spaces
description: "Foo is the coolest org on all the GH"       # (optional)
website: "https://foo.com/"                               # (optional)
---

Any additional content, with Markdown format can go here.
```

Note: delete the commented sections from the file before committing.

## User

Create new record file with `./hugow new users/<filename>.md`, where `filename` must be lowercase alphanumeric. No special character is allowed except hyphen (`-`) and underscore (`_`). It is recommended to use the name of Github user's account for `filename`. Then edit the newly created file with your information at:

`content/users/<filename>.md`

```yml
---
name: "John Doe"                                          # (required) alphanumeric with spaces
github: "john-doe"                                        # (required) github-account-without-spaces
twitter: "johndoe"                                        # (optional) twitter-account-without-spaces
description: "Coolest Dev @ [website](https://foo.com/)"  # (optional)
website: "https://jdoe.io/"                               # (optional)
---

Any additional content, with Markdown format can go here.
```

Note: delete the commented sections from the file before committing.

## Project

Create new record file with `./hugow new projects/<filename>.md`, where `filename` must be lowercase alphanumeric. No special character is allowed except hyphen (`-`) and underscore (`_`). It is recommended to use `github-account-repository-name` for `filename`. Then edit the newly created file with your information at:

`content/projects/<filename>.md`

```yml
---
name: "foo-org/bar-project"                               # (required) recommended "github-account/repository-name"
link: "https://github.com/foo-org/bar-project"            # (required) full url link to the project
description: "Bar project is the best product ever"       # (optional)
website: "https://bar-project.io/"                        # (optional)
---

Any additional content, with Markdown format can go here.
```

Note: delete the commented sections from the file before committing.

## Incubator, School, Community

Create new record file with `./hugow new incubators/<filename>.md`, where `filename` must be lowercase alphanumeric. No special character is allowed except hyphen (`-`) and underscore (`_`). It is recommended to use Github incubator's account for `filename`. Then edit the newly created file with your information at:

`content/incubators/<filename>.md`

```yml
---
name: "Baz Incubator"                                     # (required) alphanumeric with spaces
github: "Baz-Incubator"                                   # (optional) github-account-without-spaces
description: ""                                           # (optional)
website: ""                                               # (optional)
---

Any additional content, with Markdown format can go here.
```

Note: delete the commented sections from the file before committing.

## Other

Create new record file with `./hugow new other/<filename>.md`, where `filename` must be lowercase alphanumeric. No special character is allowed except hyphen (`-`) and underscore (`_`). Then edit the newly created file with your information at:

`content/other/<filename>.md`

```yml
---
name: "Name of entity which isn't any of the above"       # (required) alphanumeric with spaces
description: ""                                           # (optional)
website: ""                                               # (optional)
---

Any additional content, with Markdown format can go here.
```

Note: delete the commented sections from the file before committing.
