# Setup Azure DevOps

Create a Service Principal in the Vistual Studio Ultimate with MSDN subscription (SubscriptionId xxxx).
This subscription is connected to the Azure AD tenant moermancc (Tenant Id xxxx).

Select this subscription as the active subscription.

```shell
PS> az account set --subscription xxxx5
```

## Create Azure Service Principal

Then create the service principal account using the following command:

```shell
PS> az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/xxxx" --name "AzureDevOpsSP"
Changing "AzureDevOpsSP" to a valid URI of "http://AzureDevOpsSP", which is the required format used for service principal names
Creating 'Contributor' role assignment under scope '/subscriptions/xxxxxx'
The output includes credentials that you must protect. Be sure that you do not include these credentials in your code or check the credentials into your source control. For more information, see https://aka.ms/azadsp-cli
{
  "appId": "xxxxxxxxx",
  "displayName": "AzureDevOpsSP",
  "name": "http://AzureDevOpsSP",
  "password": "xxxxxxxx",
  "tenant": "xxxxxxxx"
}
```

These values will be mapped to the Terraform variables:
appId (Azure) → client_id (Terraform).
password (Azure) → client_secret (Terraform).
tenant (Azure) → tenant_id (Terraform).

Login to [Azure Devops](https://dev.azure.com) and select (or create) your organization.

## Install Azure DevOps extensions

Install the Terraform extension from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=charleszipp.azure-pipelines-tasks-terraform).
Install the Azure Pipelines extension from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=keesschollaart.arm-outputs).

## Setup Git tooling

To upload (push) our Terraform code to Azure DevOps Repos, we will need to get the Git client installed and generate SSH keys (if we don’t have ones). These keys will be upload to Azure DevOps and allow us to interact with the code repository in Azure DevOps Repos.

### Uploading SSH Keys to Azure DevOps

We open the Azure DevOps website, click on our profile picture, then click on 3 dots and finally click on user settings option.
On the menu, we click on the SSH public keys option.
Then we click in the + New Key button.
Copy and paste the public key, save it and the key is now available at Azure DevOps.

## Initializing the Azure DevOps Repo

The first step to build our pipeline is to set up a repo, clicking on Repos and then in Files.
Click on the Import button to import an existing Git repository.
We select Git as a Repository type, and then copy the GitHub following repository URL, in this example, we will create a small web Linux server.

## Connect Azure to the DevOps account

Sign in to your Azure DevOps organization and navigate to your project.
From the project settings, open the service connections page.
Click the New service connection button and select Azure Resource Manager to define and secure a connection to a Microsoft Azure subscription using Service Principal.
Fill in the parameters for the service connection and allow all pipelines to use this connection option.
Click OK to create the connection.

## Link our Azure Container Registry to our DevOps account

To connect our Azure Container Registry to Azure DevOps.
Sign in to your Azure DevOps organization and navigate to your project.
From the project settings, open the service connections page.
Click the New service connection button and select Docker Registry.
Select Azure Container Registry and give a name to the connection.
Click OK to create the connection.
