# Contribution Guide

You can add a record using any of the following three methods:

- Complete PR
  - add record in [README](https://github.com/opensourcecities/montreal/blob/master/README.md) AND
  - add record's `yml` file (based on [Type of Records](#type-of-records)) in `data` folder
- Partial PR
  - add record in [README](https://github.com/opensourcecities/montreal/blob/master/README.md) OR
  - add record's `yml` file (based on [Type of Records](#type-of-records)) in `data` folder
- Addition Request
  - [Open a new issue](https://github.com/RichardLitt/open-source-montreal/issues/new) and provide information for the record you want to add

> Note that if you want to send a "Partial PR" you need check **Allow edits from maintainers** checkbox while creating the PR, so that we will be able to complete the PR and merge it.

## Type of Records

- [Organization](#organization)
- [User](#user)
- [Project](#project)
- [Incubator, School, Community](#incubator-school-community)
- [Other](#other)

## Organization

Copy the sample file from `data/sample-org.yml` to `data/orgs/<filename>.yml`, where `filename` must be lowercase alphanumeric. No special character is allowed except hyphen (`-`) and underscore (`_`). It is recomended to use the name of Github organization's account for `filename`.

data/sample-org.yml
```yml
# name: (required)
# github: github-account-without-spaces (required)
# description: (optional)
# website: (optional)
name: Foo Org
github: FooOrg
description: Foo is the coolest organization account on all the GH
website: https://foo.com/
```

Note: delete the commented section in the file before committing.

## User

Copy the sample file from `data/sample-user.yml` to `data/users/<filename>.yml`, where `filename` must be lowercase alphanumeric. No special character is allowed except hyphen (`-`) and underscore (`_`). It is recomended to use the name of Github user's account for `filename`.

data/sample-user.yml
```yml
# name: (required)
# github: github-account-without-spaces (required)
# twitter: twitter-account-without-spaces (optional)
# bio: (optional)
# website: (optional)
name: John Doe
github: john-doe
twitter: johndoe
bio: Coolest Devloper @FooOrg on [website](https://foo.com/)
website: https://jdoe.io/
```

Note: delete the commented section in the file before committing.

## Project

Copy the sample file from `data/sample-project.yml` to `data/projects/<filename>.yml`, where `filename` must be lowercase alphanumeric. No special character is allowed except hyphen (`-`) and underscore (`_`). It is recomended to use `github-account-repository-name` for `filename`.

data/sample-user.yml
```yml
# name: It is recommended to use "github-account/repository-name" as the name of the project (required)
# link: full-url-link-to-the-project (required)
# description: (optional)
# website: (optional)
name: foo-org/bar-project
link: https://github.com/foo-org/bar-project
description: Bar project is the best product ever, created with <3 by @FooOrg
website: https://bar-project.io/
```

Note: delete the commented section in the file before committing.

## Incubator, School, Community

Copy the sample file from `data/sample-incubator.yml` to `data/incubators/<filename>.yml`, where `filename` must be lowercase alphanumeric. No special character is allowed except hyphen (`-`) and underscore (`_`). It is recomended to use the name of Github incubator's account for `filename`.

data/sample-incubator.yml
```yml
# name: (required)
# github: github-account-without-spaces (required)
# description: (optional)
# website: (optional)
name: Baz Incubator
github: Baz-Incubator
description:
website:
```

Note: delete the commented section in the file before committing.

## Other

Copy the sample file from `data/sample-other.yml` to `data/other/<sequence>.yml`, where `sequence` is a sequence of number with maximum two left zero (0). e.g. `009.yml`, `010.yml`, etc.

data/sample-other.yml
```yml
# name: (required)
# description: (optional)
# website: (optional)
name: Entity name which does not fall under any of above categories
description:
website:
```

Note: delete the commented section in the file before committing.