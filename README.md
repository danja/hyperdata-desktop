# HKMS Desktop

Currently this is just a clone of [Pulsar](https://pulsar-edit.dev/), which describes itself as :

> A Community-led Hyper-Hackable Text Editor, forked from Atom, built on Electron. Designed to be deeply customizable, but still approachable using the default configuration.

The plan is to configure/add to this to support tools for working with Web content and [RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework) data on a desktop machine.

The [Hyperdata Knowledge Management System](https://hyperdata.it/hkms/) is an in-progress collection applications primarily intended to aid productivity. These applications are backed by a [SPARQL](https://en.wikipedia.org/wiki/SPARQL) store, so architecturally it could be described as a kind of [Headless CMS](https://en.wikipedia.org/wiki/Headless_content_management_system).

Electron's ties to Web technologies suggest it should be a good environment in which to use the HKMS apps as a unified application. On the desktop, access to the local filesystem is indispensable, and text editing is the first requirement. These, and some of the other facilities built into Pulsar suggest it as a better starting point than a blank-slate Electron.

_There are many, many files in the Pulsar repo. It seems likely that some kind of partner stripped-down repo for hkms-desktop will be desirable, but that's a job for the distant future._

Pulsar has a MIT license, so that will carry over for the code here. For any added content, docs etc. CC Attribution will probably be applied.
