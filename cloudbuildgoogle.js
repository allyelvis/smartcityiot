{
  "discoveryVersion": "v1",
  "name": "cloudbuild",
  "baseUrl": "https://cloudbuild.googleapis.com/",
  "description": "Creates and manages builds on Google Cloud Platform.",
  "revision": "20240207",
  "canonicalName": "Cloud Build",
  "servicePath": "",
  "protocol": "rest",
  "fullyEncodeReservedExpansion": true,
  "ownerName": "Google",
  "kind": "discovery#restDescription",
  "title": "Cloud Build API",
  "auth": {
    "oauth2": {
      "scopes": {
        "https://www.googleapis.com/auth/cloud-platform": {
          "description": "See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account."
        }
      }
    }
  },
  "ownerDomain": "google.com",
  "icons": {
    "x16": "http://www.google.com/images/icons/product/search-16.gif",
    "x32": "http://www.google.com/images/icons/product/search-32.gif"
  },
  "basePath": "",
  "version": "v2",
  "parameters": {
    "callback": {
      "description": "JSONP",
      "location": "query",
      "type": "string"
    },
    "uploadType": {
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\").",
      "location": "query",
      "type": "string"
    },
    "alt": {
      "default": "json",
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "enumDescriptions": [
        "Responses with Content-Type of application/json",
        "Media download with context-dependent Content-Type",
        "Responses with Content-Type of application/x-protobuf"
      ],
      "description": "Data format for response.",
      "type": "string",
      "location": "query"
    },
    "fields": {
      "location": "query",
      "description": "Selector specifying which fields to include in a partial response.",
      "type": "string"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user.",
      "location": "query"
    },
    "prettyPrint": {
      "location": "query",
      "default": "true",
      "description": "Returns response with indentations and line breaks.",
      "type": "boolean"
    },
    "upload_protocol": {
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\").",
      "location": "query",
      "type": "string"
    },
    "quotaUser": {
      "location": "query",
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "key": {
      "type": "string",
      "location": "query",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "access_token": {
      "type": "string",
      "location": "query",
      "description": "OAuth access token."
    },
    "$.xgafv": {
      "enumDescriptions": [
        "v1 error format",
        "v2 error format"
      ],
      "description": "V1 error format.",
      "location": "query",
      "enum": [
        "1",
        "2"
      ],
      "type": "string"
    }
  },
  "version_module": true,
  "documentationLink": "https://cloud.google.com/cloud-build/docs/",
  "schemas": {
    "ExecAction": {
      "id": "ExecAction",
      "description": "ExecAction describes a \"run in container\" action.",
      "type": "object",
      "properties": {
        "command": {
          "items": {
            "type": "string"
          },
          "description": "Optional. Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. +optional",
          "type": "array"
        }
      }
    },
    "BitbucketCloudConfig": {
      "properties": {
        "readAuthorizerCredential": {
          "$ref": "UserCredential",
          "description": "Required. An access token with the `repository` access. It can be either a workspace, project or repository access token. It's recommended to use a system account to generate the credentials."
        },
        "webhookSecretSecretVersion": {
          "type": "string",
          "description": "Required. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/*/secrets/*/versions/*`."
        },
        "authorizerCredential": {
          "$ref": "UserCredential",
          "description": "Required. An access token with the `webhook`, `repository`, `repository:admin` and `pullrequest` scope access. It can be either a workspace, project or repository access token. It's recommended to use a system account to generate these credentials."
        },
        "workspace": {
          "description": "Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.",
          "type": "string"
        }
      },
      "description": "Configuration for connections to Bitbucket Cloud.",
      "id": "BitbucketCloudConfig",
      "type": "object"
    },
    "Probe": {
      "properties": {
        "periodSeconds": {
          "format": "int32",
          "description": "Optional. How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. +optional",
          "type": "integer"
        },
        "exec": {
          "$ref": "ExecAction",
          "description": "Optional. Exec specifies the action to take. +optional"
        }
      },
      "type": "object",
      "id": "Probe",
      "description": "Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic."
    },
    "Empty": {
      "description": "A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }",
      "id": "Empty",
      "type": "object",
      "properties": {}
    },
    "Location": {
      "properties": {
        "locationId": {
          "type": "string",
          "description": "The canonical id for this location. For example: `\"us-east1\"`."
        },
        "labels": {
          "description": "Cross-service attributes for the location. For example {\"cloud.googleapis.com/region\": \"us-east1\"}",
          "additionalProperties": {
            "type": "string"
          },
          "type": "object"
        },
        "displayName": {
          "description": "The friendly name for this location, typically a nearby city name. For example, \"Tokyo\".",
          "type": "string"
        },
        "metadata": {
          "additionalProperties": {
            "type": "any",
            "description": "Properties of the object. Contains field @type with type URL."
          },
          "type": "object",
          "description": "Service-specific metadata. For example the available capacity at the given location."
        },
        "name": {
          "description": "Resource name for the location, which may vary between implementations. For example: `\"projects/example-project/locations/us-east1\"`",
          "type": "string"
        }
      },
      "id": "Location",
      "description": "A resource that represents a Google Cloud location.",
      "type": "object"
    },
    "TimeoutFields": {
      "properties": {
        "pipeline": {
          "description": "Pipeline sets the maximum allowed duration for execution of the entire pipeline. The sum of individual timeouts for tasks and finally must not exceed this value.",
          "format": "google-duration",
          "type": "string"
        },
        "tasks": {
          "description": "Tasks sets the maximum allowed duration of this pipeline's tasks",
          "type": "string",
          "format": "google-duration"
        },
        "finally": {
          "type": "string",
          "format": "google-duration",
          "description": "Finally sets the maximum allowed duration of this pipeline's finally"
        }
      },
      "type": "object",
      "description": "TimeoutFields allows granular specification of pipeline, task, and finally timeouts",
      "id": "TimeoutFields"
    },
    "OperationMetadata": {
      "description": "Represents the metadata of the long-running operation.",
      "type": "object",
      "properties": {
        "statusDetail": {
          "readOnly": true,
          "type": "string",
          "description": "Output only. Human-readable status of the operation, if any."
        },
        "cancelRequested": {
          "readOnly": true,
          "type": "boolean",
          "description": "Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`."
        },
        "verb": {
          "readOnly": true,
          "description": "Output only. Name of the verb executed by the operation.",
          "type": "string"
        },
        "createTime": {
          "type": "string",
          "format": "google-datetime",
          "description": "Output only. The time the operation was created.",
          "readOnly": true
        },
        "target": {
          "readOnly": true,
          "description": "Output only. Server-defined resource path for the target of the operation.",
          "type": "string"
        },
        "endTime": {
          "readOnly": true,
          "description": "Output only. The time the operation finished running.",
          "type": "string",
          "format": "google-datetime"
        },
        "apiVersion": {
          "readOnly": true,
          "type": "string",
          "description": "Output only. API version used to start the operation."
        }
      },
      "id": "OperationMetadata"
    },
    "TaskResult": {
      "description": "TaskResult is used to describe the results of a task.",
      "id": "TaskResult",
      "properties": {
        "properties": {
          "additionalProperties": {
            "$ref": "PropertySpec"
          },
          "description": "When type is OBJECT, this map holds the names of fields inside that object along with the type of data each field holds.",
          "type": "object"
        },
        "description": {
          "type": "string",
          "description": "Description of the result."
        },
        "type": {
          "description": "The type of data that the result holds.",
          "enum": [
            "TYPE_UNSPECIFIED",
            "STRING",
            "ARRAY",
            "OBJECT"
          ],
          "type": "string",
          "enumDescriptions": [
            "Default enum type; should not be used.",
            "Default",
            "Array type",
            "Object type"
          ]
        },
        "name": {
          "description": "Name of the result.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "TestIamPermissionsResponse": {
      "description": "Response message for `TestIamPermissions` method.",
      "id": "TestIamPermissionsResponse",
      "properties": {
        "permissions": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "description": "A subset of `TestPermissionsRequest.permissions` that the caller is allowed."
        }
      },
      "type": "object"
    },
    "ListRepositoriesResponse": {
      "type": "object",
      "description": "Message for response to listing Repositories.",
      "properties": {
        "nextPageToken": {
          "type": "string",
          "description": "A token identifying a page of results the server should return."
        },
        "repositories": {
          "description": "The list of Repositories.",
          "items": {
            "$ref": "Repository"
          },
          "type": "array"
        }
      },
      "id": "ListRepositoriesResponse"
    },
    "AuditConfig": {
      "type": "object",
      "id": "AuditConfig",
      "description": "Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { \"audit_configs\": [ { \"service\": \"allServices\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" }, { \"log_type\": \"ADMIN_READ\" } ] }, { \"service\": \"sampleservice.googleapis.com\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\" }, { \"log_type\": \"DATA_WRITE\", \"exempted_members\": [ \"user:aliya@example.com\" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.",
      "properties": {
        "service": {
          "description": "Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.",
          "type": "string"
        },
        "auditLogConfigs": {
          "items": {
            "$ref": "AuditLogConfig"
          },
          "type": "array",
          "description": "The configuration for logging of each type of permission."
        }
      }
    },
    "WorkspacePipelineTaskBinding": {
      "id": "WorkspacePipelineTaskBinding",
      "properties": {
        "workspace": {
          "type": "string",
          "description": "Name of the workspace declared by the pipeline."
        },
        "subPath": {
          "type": "string",
          "description": "Optional. SubPath is optionally a directory on the volume which should be used for this binding (i.e. the volume will be mounted at this sub directory). +optional"
        },
        "name": {
          "type": "string",
          "description": "Name of the workspace as declared by the task."
        }
      },
      "description": "WorkspacePipelineTaskBinding maps workspaces from the PipelineSpec to the workspaces declared in the Task.",
      "type": "object"
    },
    "Step": {
      "description": "Step embeds the Container type, which allows it to include fields not provided by Container.",
      "properties": {
        "securityContext": {
          "description": "Optional. SecurityContext defines the security options the Step should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ +optional",
          "$ref": "SecurityContext"
        },
        "volumeMounts": {
          "description": "Pod volumes to mount into the container's filesystem.",
          "items": {
            "$ref": "VolumeMount"
          },
          "type": "array"
        },
        "env": {
          "items": {
            "$ref": "EnvVar"
          },
          "type": "array",
          "description": "List of environment variables to set in the container."
        },
        "image": {
          "description": "Docker image name.",
          "type": "string"
        },
        "command": {
          "description": "Entrypoint array.",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "workingDir": {
          "type": "string",
          "description": "Container's working directory."
        },
        "args": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "description": "Arguments to the entrypoint."
        },
        "timeout": {
          "description": "Time after which the Step times out. Defaults to never.",
          "type": "string",
          "format": "google-duration"
        },
        "script": {
          "description": "The contents of an executable file to execute.",
          "type": "string"
        },
        "name": {
          "type": "string",
          "description": "Name of the container specified as a DNS_LABEL."
        }
      },
      "type": "object",
      "id": "Step"
    },
    "SkippedTask": {
      "id": "SkippedTask",
      "description": "SkippedTask is used to describe the Tasks that were skipped due to their When Expressions evaluating to False.",
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Name is the Pipeline Task name"
        },
        "whenExpressions": {
          "type": "array",
          "items": {
            "$ref": "WhenExpression"
          },
          "description": "WhenExpressions is the list of checks guarding the execution of the PipelineTask"
        },
        "reason": {
          "description": "Output only. Reason is the cause of the PipelineTask being skipped.",
          "type": "string",
          "readOnly": true
        }
      }
    },
    "GoogleDevtoolsCloudbuildV2Condition": {
      "type": "object",
      "properties": {
        "severity": {
          "enumDescriptions": [
            "Default enum type; should not be used.",
            "Severity is warning.",
            "Severity is informational only."
          ],
          "enum": [
            "SEVERITY_UNSPECIFIED",
            "WARNING",
            "INFO"
          ],
          "type": "string",
          "description": "Severity with which to treat failures of this type of condition."
        },
        "message": {
          "description": "A human readable message indicating details about the transition.",
          "type": "string"
        },
        "status": {
          "description": "Status of the condition.",
          "enumDescriptions": [
            "Default enum type indicating execution is still ongoing.",
            "Success",
            "Failure"
          ],
          "type": "string",
          "enum": [
            "UNKNOWN",
            "TRUE",
            "FALSE"
          ]
        },
        "type": {
          "type": "string",
          "description": "Type of condition."
        },
        "lastTransitionTime": {
          "format": "google-datetime",
          "description": "LastTransitionTime is the last time the condition transitioned from one status to another.",
          "type": "string"
        },
        "reason": {
          "type": "string",
          "description": "The reason for the condition's last transition."
        }
      },
      "id": "GoogleDevtoolsCloudbuildV2Condition",
      "description": "Conditions defines a readiness condition for a Knative resource."
    },
    "Binding": {
      "type": "object",
      "description": "Associates `members`, or principals, with a `role`.",
      "id": "Binding",
      "properties": {
        "condition": {
          "description": "The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).",
          "$ref": "Expr"
        },
        "role": {
          "type": "string",
          "description": "Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles)."
        },
        "members": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`."
        }
      }
    },
    "GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig": {
      "type": "object",
      "description": "Configuration for connections to an instance of GitHub Enterprise.",
      "properties": {
        "hostUri": {
          "type": "string",
          "description": "Required. The URI of the GitHub Enterprise host this connection is for."
        },
        "webhookSecretSecretVersion": {
          "type": "string",
          "description": "SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/*/secrets/*/versions/*`."
        },
        "appId": {
          "format": "int64",
          "description": "Id of the GitHub App created from the manifest.",
          "type": "string"
        },
        "serverVersion": {
          "description": "Output only. GitHub Enterprise version installed at the host_uri.",
          "type": "string",
          "readOnly": true
        },
        "serviceDirectoryConfig": {
          "description": "Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server will be made over the public internet.",
          "$ref": "GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig"
        },
        "privateKeySecretVersion": {
          "description": "SecretManager resource containing the private key of the GitHub App, formatted as `projects/*/secrets/*/versions/*`.",
          "type": "string"
        },
        "apiKey": {
          "type": "string",
          "description": "Required. API Key used for authentication of webhook events."
        },
        "sslCa": {
          "type": "string",
          "description": "SSL certificate to use for requests to GitHub Enterprise."
        },
        "appSlug": {
          "description": "The URL-friendly name of the GitHub App.",
          "type": "string"
        },
        "appInstallationId": {
          "format": "int64",
          "type": "string",
          "description": "ID of the installation of the GitHub App."
        }
      },
      "id": "GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig"
    },
    "BatchCreateRepositoriesRequest": {
      "type": "object",
      "properties": {
        "requests": {
          "items": {
            "$ref": "CreateRepositoryRequest"
          },
          "type": "array",
          "description": "Required. The request messages specifying the repositories to create."
        }
      },
      "description": "Message for creating repositoritories in batch.",
      "id": "BatchCreateRepositoriesRequest"
    },
    "CancelOperationRequest": {
      "type": "object",
      "properties": {},
      "id": "CancelOperationRequest",
      "description": "The request message for Operations.CancelOperation."
    },
    "EmbeddedTask": {
      "properties": {
        "taskSpec": {
          "$ref": "TaskSpec",
          "description": "Spec to instantiate this TaskRun."
        },
        "annotations": {
          "additionalProperties": {
            "type": "string"
          },
          "type": "object",
          "description": "User annotations. See https://google.aip.dev/128#annotations"
        }
      },
      "description": "EmbeddedTask defines a Task that is embedded in a Pipeline.",
      "id": "EmbeddedTask",
      "type": "object"
    },
    "FetchReadTokenResponse": {
      "properties": {
        "token": {
          "type": "string",
          "description": "The token content."
        },
        "expirationTime": {
          "type": "string",
          "format": "google-datetime",
          "description": "Expiration timestamp. Can be empty if unknown or non-expiring."
        }
      },
      "id": "FetchReadTokenResponse",
      "type": "object",
      "description": "Message for responding to get read token."
    },
    "WhenExpression": {
      "description": "Conditions that need to be true for the task to run.",
      "type": "object",
      "properties": {
        "values": {
          "description": "Values is an array of strings, which is compared against the input, for guard checking.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "expressionOperator": {
          "type": "string",
          "enum": [
            "EXPRESSION_OPERATOR_UNSPECIFIED",
            "IN",
            "NOT_IN"
          ],
          "description": "Operator that represents an Input's relationship to the values",
          "enumDescriptions": [
            "Default enum type; should not be used.",
            "Input is in values.",
            "Input is not in values."
          ]
        },
        "input": {
          "description": "Input is the string for guard checking which can be a static input or an output from a parent Task.",
          "type": "string"
        }
      },
      "id": "WhenExpression"
    },
    "Repository": {
      "type": "object",
      "description": "A repository associated to a parent connection.",
      "properties": {
        "etag": {
          "type": "string",
          "description": "This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding."
        },
        "annotations": {
          "type": "object",
          "description": "Allows clients to store small amounts of arbitrary data.",
          "additionalProperties": {
            "type": "string"
          }
        },
        "name": {
          "type": "string",
          "description": "Immutable. Resource name of the repository, in the format `projects/*/locations/*/connections/*/repositories/*`."
        },
        "createTime": {
          "type": "string",
          "readOnly": true,
          "format": "google-datetime",
          "description": "Output only. Server assigned timestamp for when the connection was created."
        },
        "remoteUri": {
          "type": "string",
          "description": "Required. Git Clone HTTPS URI."
        },
        "webhookId": {
          "readOnly": true,
          "description": "Output only. External ID of the webhook created for the repository.",
          "type": "string"
        },
        "updateTime": {
          "format": "google-datetime",
          "readOnly": true,
          "description": "Output only. Server assigned timestamp for when the connection was updated.",
          "type": "string"
        }
      },
      "id": "Repository"
    },
    "TaskSpec": {
      "id": "TaskSpec",
      "description": "TaskSpec contains the Spec to instantiate a TaskRun.",
      "properties": {
        "workspaces": {
          "type": "array",
          "items": {
            "$ref": "WorkspaceDeclaration"
          },
          "description": "The volumes that this Task requires."
        },
        "stepTemplate": {
          "description": "Optional. StepTemplate can be used as the basis for all step containers within the Task, so that the steps inherit settings on the base container.",
          "$ref": "StepTemplate"
        },
        "description": {
          "type": "string",
          "description": "Description of the task."
        },
        "volumes": {
          "description": "A collection of volumes that are available to mount into steps.",
          "items": {
            "$ref": "VolumeSource"
          },
          "type": "array"
        },
        "steps": {
          "items": {
            "$ref": "Step"
          },
          "type": "array",
          "description": "Steps of the task."
        },
        "results": {
          "items": {
            "$ref": "TaskResult"
          },
          "description": "Values that this Task can output.",
          "type": "array"
        },
        "managedSidecars": {
          "type": "array",
          "description": "Sidecars that run alongside the Task’s step containers that should be added to this Task.",
          "items": {
            "type": "string",
            "enum": [
              "MANAGED_SIDECAR_UNSPECIFIED",
              "PRIVILEGED_DOCKER_DAEMON"
            ],
            "enumDescriptions": [
              "Default enum type; should not be used.",
              "Sidecar for a privileged docker daemon."
            ]
          }
        },
        "params": {
          "items": {
            "$ref": "ParamSpec"
          },
          "description": "List of parameters.",
          "type": "array"
        },
        "sidecars": {
          "description": "Sidecars that run alongside the Task's step containers.",
          "items": {
            "$ref": "Sidecar"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "PipelineRef": {
      "type": "object",
      "id": "PipelineRef",
      "description": "PipelineRef can be used to refer to a specific instance of a Pipeline.",
      "properties": {
        "resolver": {
          "description": "Resolver is the name of the resolver that should perform resolution of the referenced Tekton resource.",
          "type": "string",
          "enumDescriptions": [
            "Default enum type; should not be used.",
            "Bundles resolver. https://tekton.dev/docs/pipelines/bundle-resolver/",
            "GCB repo resolver.",
            "Simple Git resolver. https://tekton.dev/docs/pipelines/git-resolver/"
          ],
          "enum": [
            "RESOLVER_NAME_UNSPECIFIED",
            "BUNDLES",
            "GCB_REPO",
            "GIT"
          ]
        },
        "name": {
          "type": "string",
          "deprecated": true,
          "description": "Name of the Pipeline."
        },
        "params": {
          "description": "Params contains the parameters used to identify the referenced Tekton resource. Example entries might include \"repo\" or \"path\" but the set of params ultimately depends on the chosen resolver.",
          "items": {
            "$ref": "Param"
          },
          "type": "array"
        }
      }
    },
    "SecretVolumeSource": {
      "description": "Secret Volume Source.",
      "type": "object",
      "properties": {
        "secretName": {
          "type": "string",
          "description": "Name of the secret referenced by the WorkspaceBinding."
        },
        "secretVersion": {
          "type": "string",
          "readOnly": true,
          "description": "Output only. Resource name of the SecretVersion. In format: projects/*/secrets/*/versions/*"
        }
      },
      "id": "SecretVolumeSource"
    },
    "PipelineWorkspaceDeclaration": {
      "description": "Workspaces declares a set of named workspaces that are expected to be provided by a PipelineRun.",
      "properties": {
        "optional": {
          "type": "boolean",
          "description": "Optional marks a Workspace as not being required in PipelineRuns. By default this field is false and so declared workspaces are required."
        },
        "description": {
          "description": "Description is a human readable string describing how the workspace will be used in the Pipeline.",
          "type": "string"
        },
        "name": {
          "type": "string",
          "description": "Name is the name of a workspace to be provided by a PipelineRun."
        }
      },
      "id": "PipelineWorkspaceDeclaration",
      "type": "object"
    },
    "ParamSpec": {
      "description": "ParamSpec defines parameters needed beyond typed inputs (such as resources). Parameter values are provided by users as inputs on a TaskRun or PipelineRun.",
      "properties": {
        "name": {
          "type": "string",
          "description": "Name of the ParamSpec"
        },
        "type": {
          "description": "Type of ParamSpec",
          "enumDescriptions": [
            "Default enum type; should not be used.",
            "Default",
            "Arrary type."
          ],
          "enum": [
            "TYPE_UNSPECIFIED",
            "STRING",
            "ARRAY"
          ],
          "type": "string"
        },
        "description": {
          "description": "Description of the ParamSpec",
          "type": "string"
        },
        "default": {
          "$ref": "ParamValue",
          "description": "The default value a parameter takes if no input value is supplied"
        }
      },
      "id": "ParamSpec",
      "type": "object"
    },
    "RunWorkflowCustomOperationMetadata": {
      "properties": {
        "target": {
          "readOnly": true,
          "description": "Output only. Server-defined resource path for the target of the operation.",
          "type": "string"
        },
        "createTime": {
          "type": "string",
          "format": "google-datetime",
          "readOnly": true,
          "description": "Output only. The time the operation was created."
        },
        "requestedCancellation": {
          "description": "Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
          "readOnly": true,
          "type": "boolean"
        },
        "verb": {
          "description": "Output only. Name of the verb executed by the operation.",
          "readOnly": true,
          "type": "string"
        },
        "endTime": {
          "type": "string",
          "format": "google-datetime",
          "readOnly": true,
          "description": "Output only. The time the operation finished running."
        },
        "apiVersion": {
          "description": "Output only. API version used to start the operation.",
          "type": "string",
          "readOnly": true
        },
        "pipelineRunId": {
          "readOnly": true,
          "description": "Output only. ID of the pipeline run created by RunWorkflow.",
          "type": "string"
        }
      },
      "id": "RunWorkflowCustomOperationMetadata",
      "description": "Represents the custom metadata of the RunWorkflow long-running operation.",
      "type": "object"
    },
    "ParamValue": {
      "id": "ParamValue",
      "description": "Parameter value.",
      "type": "object",
      "properties": {
        "type": {
          "enumDescriptions": [
            "Default enum type; should not be used.",
            "Default",
            "Array type"
          ],
          "description": "Type of parameter.",
          "enum": [
            "TYPE_UNSPECIFIED",
            "STRING",
            "ARRAY"
          ],
          "type": "string"
        },
        "arrayVal": {
          "description": "Value of the parameter if type is array.",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "stringVal": {
          "description": "Value of the parameter if type is string.",
          "type": "string"
        }
      }
    },
    "ListLocationsResponse": {
      "properties": {
        "nextPageToken": {
          "description": "The standard List next-page token.",
          "type": "string"
        },
        "locations": {
          "type": "array",
          "items": {
            "$ref": "Location"
          },
          "description": "A list of locations that matches the specified filter in the request."
        }
      },
      "description": "The response message for Locations.ListLocations.",
      "id": "ListLocationsResponse",
      "type": "object"
    },
    "FetchGitRefsResponse": {
      "properties": {
        "refNames": {
          "description": "Name of the refs fetched.",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "nextPageToken": {
          "type": "string",
          "description": "A token identifying a page of results the server should return."
        }
      },
      "description": "Response for fetching git refs",
      "type": "object",
      "id": "FetchGitRefsResponse"
    },
    "CreateRepositoryRequest": {
      "type": "object",
      "id": "CreateRepositoryRequest",
      "description": "Message for creating a Repository.",
      "properties": {
        "repository": {
          "description": "Required. The repository to create.",
          "$ref": "Repository"
        },
        "parent": {
          "type": "string",
          "description": "Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there."
        },
        "repositoryId": {
          "type": "string",
          "description": "Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@."
        }
      }
    },
    "GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig": {
      "type": "object",
      "id": "GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig",
      "description": "ServiceDirectoryConfig represents Service Directory configuration for a connection.",
      "properties": {
        "service": {
          "description": "Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.",
          "type": "string"
        }
      }
    },
    "FetchReadWriteTokenResponse": {
      "description": "Message for responding to get read/write token.",
      "properties": {
        "expirationTime": {
          "format": "google-datetime",
          "type": "string",
          "description": "Expiration timestamp. Can be empty if unknown or non-expiring."
        },
        "token": {
          "type": "string",
          "description": "The token content."
        }
      },
      "type": "object",
      "id": "FetchReadWriteTokenResponse"
    },
    "GoogleDevtoolsCloudbuildV2GitLabConfig": {
      "id": "GoogleDevtoolsCloudbuildV2GitLabConfig",
      "properties": {
        "serverVersion": {
          "type": "string",
          "readOnly": true,
          "description": "Output only. Version of the GitLab Enterprise server running on the `host_uri`."
        },
        "hostUri": {
          "description": "The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.",
          "type": "string"
        },
        "authorizerCredential": {
          "$ref": "UserCredential",
          "description": "Required. A GitLab personal access token with the `api` scope access."
        },
        "readAuthorizerCredential": {
          "$ref": "UserCredential",
          "description": "Required. A GitLab personal access token with the minimum `read_api` scope access."
        },
        "sslCa": {
          "type": "string",
          "description": "SSL certificate to use for requests to GitLab Enterprise."
        },
        "webhookSecretSecretVersion": {
          "type": "string",
          "description": "Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as `projects/*/secrets/*/versions/*`."
        },
        "serviceDirectoryConfig": {
          "description": "Configuration for using Service Directory to privately connect to a GitLab Enterprise server. This should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server will be made over the public internet.",
          "$ref": "GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig"
        }
      },
      "type": "object",
      "description": "Configuration for connections to gitlab.com or an instance of GitLab Enterprise."
    },
    "Worker": {
      "description": "Configuration for the worker.",
      "id": "Worker",
      "type": "object",
      "properties": {
        "machineType": {
          "type": "string",
          "description": "Optional. Machine type of a worker, default is \"e2-standard-2\"."
        }
      }
    },
    "OAuthCredential": {
      "description": "Represents an OAuth token of the account that authorized the Connection, and associated metadata.",
      "properties": {
        "username": {
          "readOnly": true,
          "type": "string",
          "description": "Output only. The username associated to this token."
        },
        "oauthTokenSecretVersion": {
          "description": "A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: `projects/*/secrets/*/versions/*`.",
          "type": "string"
        }
      },
      "type": "object",
      "id": "OAuthCredential"
    },
    "Expr": {
      "properties": {
        "description": {
          "type": "string",
          "description": "Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI."
        },
        "location": {
          "type": "string",
          "description": "Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file."
        },
        "title": {
          "description": "Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.",
          "type": "string"
        },
        "expression": {
          "type": "string",
          "description": "Textual representation of an expression in Common Expression Language syntax."
        }
      },
      "description": "Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: \"Summary size limit\" description: \"Determines if a summary is less than 100 chars\" expression: \"document.summary.size() \u003c 100\" Example (Equality): title: \"Requestor is owner\" description: \"Determines if requestor is the document owner\" expression: \"document.owner == request.auth.claims.email\" Example (Logic): title: \"Public documents\" description: \"Determine whether the document should be publicly visible\" expression: \"document.type != 'private' && document.type != 'internal'\" Example (Data Manipulation): title: \"Notification string\" description: \"Create a notification string with a timestamp.\" expression: \"'New message received at ' + string(document.create_time)\" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.",
      "id": "Expr",
      "type": "object"
    },
    "Capabilities": {
      "description": "Capabilities adds and removes POSIX capabilities from running containers.",
      "properties": {
        "add": {
          "items": {
            "type": "string"
          },
          "description": "Optional. Added capabilities +optional",
          "type": "array"
        },
        "drop": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "description": "Optional. Removed capabilities +optional"
        }
      },
      "type": "object",
      "id": "Capabilities"
    },
    "PipelineRun": {
      "description": "Message describing PipelineRun object",
      "id": "PipelineRun",
      "properties": {
        "conditions": {
          "readOnly": true,
          "description": "Output only. Kubernetes Conditions convention for PipelineRun status and error.",
          "type": "array",
          "items": {
            "$ref": "GoogleDevtoolsCloudbuildV2Condition"
          }
        },
        "params": {
          "items": {
            "$ref": "Param"
          },
          "type": "array",
          "description": "Params is a list of parameter names and values."
        },
        "worker": {
          "description": "Optional. Worker configuration.",
          "$ref": "Worker"
        },
        "record": {
          "readOnly": true,
          "description": "Output only. The `Record` of this `PipelineRun`. Format: `projects/{project}/locations/{location}/results/{result_id}/records/{record_id}`",
          "type": "string"
        },
        "workflow": {
          "type": "string",
          "readOnly": true,
          "description": "Output only. The Workflow used to create this PipelineRun."
        },
        "gcbParams": {
          "type": "object",
          "description": "Output only. GCB default params.",
          "readOnly": true,
          "additionalProperties": {
            "type": "string"
          }
        },
        "timeouts": {
          "$ref": "TimeoutFields",
          "description": "Time after which the Pipeline times out. Currently three keys are accepted in the map pipeline, tasks and finally with Timeouts.pipeline \u003e= Timeouts.tasks + Timeouts.finally"
        },
        "startTime": {
          "format": "google-datetime",
          "description": "Output only. Time the pipeline is actually started.",
          "readOnly": true,
          "type": "string"
        },
        "workspaces": {
          "items": {
            "$ref": "WorkspaceBinding"
          },
          "description": "Workspaces is a list of WorkspaceBindings from volumes to workspaces.",
          "type": "array"
        },
        "etag": {
          "description": "Needed for declarative-friendly resources.",
          "type": "string"
        },
        "pipelineRef": {
          "description": "PipelineRef refer to a specific instance of a Pipeline.",
          "$ref": "PipelineRef"
        },
        "serviceAccount": {
          "description": "Service account used in the Pipeline.",
          "type": "string"
        },
        "finallyStartTime": {
          "readOnly": true,
          "format": "google-datetime",
          "description": "Output only. FinallyStartTime is when all non-finally tasks have been completed and only finally tasks are being executed. +optional",
          "type": "string"
        },
        "pipelineRunStatus": {
          "type": "string",
          "enumDescriptions": [
            "Default enum type; should not be used.",
            "Cancelled status."
          ],
          "description": "Pipelinerun status the user can provide. Used for cancellation.",
          "enum": [
            "PIPELINE_RUN_STATUS_UNSPECIFIED",
            "PIPELINE_RUN_CANCELLED"
          ]
        },
        "workerPool": {
          "type": "string",
          "description": "Output only. The WorkerPool used to run this PipelineRun.",
          "readOnly": true
        },
        "completionTime": {
          "description": "Output only. Time the pipeline completed.",
          "type": "string",
          "readOnly": true,
          "format": "google-datetime"
        },
        "childReferences": {
          "description": "Output only. List of TaskRun and Run names and PipelineTask names for children of this PipelineRun.",
          "items": {
            "$ref": "ChildStatusReference"
          },
          "type": "array",
          "readOnly": true
        },
        "name": {
          "description": "Output only. The `PipelineRun` name with format `projects/{project}/locations/{location}/pipelineRuns/{pipeline_run}`",
          "readOnly": true,
          "type": "string"
        },
        "skippedTasks": {
          "description": "Output only. List of tasks that were skipped due to when expressions evaluating to false.",
          "items": {
            "$ref": "SkippedTask"
          },
          "type": "array",
          "readOnly": true
        },
        "pipelineSpec": {
          "description": "PipelineSpec defines the desired state of Pipeline.",
          "$ref": "PipelineSpec"
        },
        "updateTime": {
          "readOnly": true,
          "type": "string",
          "description": "Output only. Time at which the request to update the `PipelineRun` was received.",
          "format": "google-datetime"
        },
        "resolvedPipelineSpec": {
          "$ref": "PipelineSpec",
          "readOnly": true,
          "description": "Output only. The exact PipelineSpec used to instantiate the run."
        },
        "uid": {
          "type": "string",
          "readOnly": true,
          "description": "Output only. A unique identifier for the `PipelineRun`."
        },
        "provenance": {
          "$ref": "Provenance",
          "description": "Optional. Provenance configuration."
        },
        "createTime": {
          "format": "google-datetime",
          "readOnly": true,
          "description": "Output only. Time at which the request to create the `PipelineRun` was received.",
          "type": "string"
        },
        "annotations": {
          "description": "User annotations. See https://google.aip.dev/128#annotations",
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "security": {
          "description": "Optional. Security configuration.",
          "$ref": "Security"
        }
      },
      "type": "object"
    },
    "PipelineTask": {
      "description": "PipelineTask defines a task in a Pipeline.",
      "type": "object",
      "id": "PipelineTask",
      "properties": {
        "name": {
          "description": "Name of the task.",
          "type": "string"
        },
        "workspaces": {
          "items": {
            "$ref": "WorkspacePipelineTaskBinding"
          },
          "description": "Workspaces maps workspaces from the pipeline spec to the workspaces declared in the Task.",
          "type": "array"
        },
        "taskRef": {
          "description": "Reference to a specific instance of a task.",
          "$ref": "TaskRef"
        },
        "whenExpressions": {
          "items": {
            "$ref": "WhenExpression"
          },
          "description": "Conditions that need to be true for the task to run.",
          "type": "array"
        },
        "params": {
          "description": "Params is a list of parameter names and values.",
          "type": "array",
          "items": {
            "$ref": "Param"
          }
        },
        "timeout": {
          "description": "Time after which the TaskRun times out. Defaults to 1 hour. Specified TaskRun timeout should be less than 24h.",
          "format": "google-duration",
          "type": "string"
        },
        "taskSpec": {
          "$ref": "EmbeddedTask",
          "description": "Spec to instantiate this TaskRun."
        },
        "retries": {
          "type": "integer",
          "format": "int32",
          "description": "Retries represents how many times this task should be retried in case of task failure."
        },
        "runAfter": {
          "items": {
            "type": "string"
          },
          "description": "RunAfter is the list of PipelineTask names that should be executed before this Task executes. (Used to force a specific ordering in graph execution.)",
          "type": "array"
        }
      }
    },
    "FetchReadWriteTokenRequest": {
      "properties": {},
      "description": "Message for fetching SCM read/write token.",
      "id": "FetchReadWriteTokenRequest",
      "type": "object"
    },
    "HttpBody": {
      "properties": {
        "contentType": {
          "type": "string",
          "description": "The HTTP Content-Type header value specifying the content type of the body."
        },
        "data": {
          "format": "byte",
          "description": "The HTTP request/response body as raw binary.",
          "type": "string"
        },
        "extensions": {
          "description": "Application specific response metadata. Must be set in the first response for streaming APIs.",
          "items": {
            "type": "object",
            "additionalProperties": {
              "description": "Properties of the object. Contains field @type with type URL.",
              "type": "any"
            }
          },
          "type": "array"
        }
      },
      "type": "object",
      "description": "Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.",
      "id": "HttpBody"
    },
    "EnvVar": {
      "properties": {
        "value": {
          "type": "string",
          "description": "Value of the environment variable."
        },
        "name": {
          "type": "string",
          "description": "Name of the environment variable."
        }
      },
      "id": "EnvVar",
      "description": "Environment variable.",
      "type": "object"
    },
    "Operation": {
      "description": "This resource represents a long-running operation that is the result of a network API call.",
      "properties": {
        "done": {
          "description": "If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.",
          "type": "boolean"
        },
        "response": {
          "type": "object",
          "additionalProperties": {
            "type": "any",
            "description": "Properties of the object. Contains field @type with type URL."
          },
          "description": "The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`."
        },
        "name": {
          "description": "The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.",
          "type": "string"
        },
        "error": {
          "description": "The error result of the operation in case of failure or cancellation.",
          "$ref": "Status"
        },
        "metadata": {
          "description": "Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.",
          "additionalProperties": {
            "description": "Properties of the object. Contains field @type with type URL.",
            "type": "any"
          },
          "type": "object"
        }
      },
      "type": "object",
      "id": "Operation"
    },
    "Sidecar": {
      "id": "Sidecar",
      "properties": {
        "readinessProbe": {
          "description": "Optional. Periodic probe of Sidecar service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional",
          "$ref": "Probe"
        },
        "script": {
          "description": "The contents of an executable file to execute.",
          "type": "string"
        },
        "name": {
          "description": "Name of the Sidecar.",
          "type": "string"
        },
        "securityContext": {
          "description": "Optional. Security options the container should be run with.",
          "$ref": "SecurityContext"
        },
        "args": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Arguments to the entrypoint."
        },
        "workingDir": {
          "description": "Container's working directory.",
          "type": "string"
        },
        "env": {
          "items": {
            "$ref": "EnvVar"
          },
          "type": "array",
          "description": "List of environment variables to set in the container."
        },
        "command": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "description": "Entrypoint array."
        },
        "volumeMounts": {
          "description": "Pod volumes to mount into the container's filesystem.",
          "items": {
            "$ref": "VolumeMount"
          },
          "type": "array"
        },
        "image": {
          "description": "Docker image name.",
          "type": "string"
        }
      },
      "description": "Sidecars run alongside the Task's step containers.",
      "type": "object"
    },
    "StepTemplate": {
      "type": "object",
      "properties": {
        "volumeMounts": {
          "type": "array",
          "items": {
            "$ref": "VolumeMount"
          },
          "description": "Optional. Pod volumes to mount into the container's filesystem."
        },
        "env": {
          "description": "Optional. List of environment variables to set in the Step. Cannot be updated.",
          "items": {
            "$ref": "EnvVar"
          },
          "type": "array"
        }
      },
      "description": "StepTemplate can be used as the basis for all step containers within the Task, so that the steps inherit settings on the base container.",
      "id": "StepTemplate"
    },
    "ListConnectionsResponse": {
      "properties": {
        "connections": {
          "description": "The list of Connections.",
          "items": {
            "$ref": "Connection"
          },
          "type": "array"
        },
        "nextPageToken": {
          "description": "A token identifying a page of results the server should return.",
          "type": "string"
        }
      },
      "description": "Message for response to listing Connections.",
      "id": "ListConnectionsResponse",
      "type": "object"
    },
    "PipelineSpec": {
      "type": "object",
      "description": "PipelineSpec defines the desired state of Pipeline.",
      "id": "PipelineSpec",
      "properties": {
        "workspaces": {
          "description": "Workspaces declares a set of named workspaces that are expected to be provided by a PipelineRun.",
          "items": {
            "$ref": "PipelineWorkspaceDeclaration"
          },
          "type": "array"
        },
        "params": {
          "items": {
            "$ref": "ParamSpec"
          },
          "type": "array",
          "description": "List of parameters."
        },
        "finallyTasks": {
          "items": {
            "$ref": "PipelineTask"
          },
          "type": "array",
          "description": "List of Tasks that execute just before leaving the Pipeline i.e. either after all Tasks are finished executing successfully or after a failure which would result in ending the Pipeline."
        },
        "tasks": {
          "description": "List of Tasks that execute when this Pipeline is run.",
          "type": "array",
          "items": {
            "$ref": "PipelineTask"
          }
        },
        "generatedYaml": {
          "type": "string",
          "readOnly": true,
          "description": "Output only. auto-generated yaml that is output only for display purpose for workflows using pipeline_spec, used by UI/gcloud cli for Workflows."
        }
      }
    },
    "VolumeMount": {
      "description": "Pod volumes to mount into the container's filesystem.",
      "type": "object",
      "properties": {
        "readOnly": {
          "description": "Mounted read-only if true, read-write otherwise (false or unspecified).",
          "type": "boolean"
        },
        "subPath": {
          "type": "string",
          "description": "Path within the volume from which the container's volume should be mounted. Defaults to \"\" (volume's root)."
        },
        "name": {
          "type": "string",
          "description": "Name of the volume."
        },
        "mountPath": {
          "description": "Path within the container at which the volume should be mounted. Must not contain ':'.",
          "type": "string"
        },
        "subPathExpr": {
          "type": "string",
          "description": "Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to \"\" (volume's root)."
        }
      },
      "id": "VolumeMount"
    },
    "VolumeClaim": {
      "id": "VolumeClaim",
      "type": "object",
      "description": "VolumeClaim is a user's request for a volume.",
      "properties": {
        "storage": {
          "description": "Volume size, e.g. 1gb.",
          "type": "string"
        }
      }
    },
    "WorkspaceBinding": {
      "description": "WorkspaceBinding maps a workspace to a Volume. PipelineRef can be used to refer to a specific instance of a Pipeline.",
      "properties": {
        "name": {
          "type": "string",
          "description": "Name of the workspace."
        },
        "secret": {
          "$ref": "SecretVolumeSource",
          "description": "Secret Volume Source."
        },
        "subPath": {
          "type": "string",
          "description": "Optional. SubPath is optionally a directory on the volume which should be used for this binding (i.e. the volume will be mounted at this sub directory). +optional"
        },
        "volumeClaim": {
          "description": "Volume claim that will be created in the same namespace.",
          "$ref": "VolumeClaim"
        }
      },
      "id": "WorkspaceBinding",
      "type": "object"
    },
    "PropertySpec": {
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "TYPE_UNSPECIFIED",
            "STRING"
          ],
          "enumDescriptions": [
            "Default enum type; should not be used.",
            "Default"
          ],
          "description": "A type for the object."
        }
      },
      "description": "PropertySpec holds information about a property in an object.",
      "type": "object",
      "id": "PropertySpec"
    },
    "VolumeSource": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Name of the Volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names"
        },
        "emptyDir": {
          "$ref": "EmptyDirVolumeSource",
          "description": "A temporary directory that shares a pod's lifetime."
        }
      },
      "description": "Volumes available to mount.",
      "id": "VolumeSource"
    },
    "Param": {
      "properties": {
        "value": {
          "$ref": "ParamValue",
          "description": "Value of the parameter."
        },
        "name": {
          "type": "string",
          "description": "Name of the parameter."
        }
      },
      "type": "object",
      "id": "Param",
      "description": "Param defined with name and value. PipelineRef can be used to refer to a specific instance of a Pipeline."
    },
    "InstallationState": {
      "id": "InstallationState",
      "type": "object",
      "properties": {
        "stage": {
          "enumDescriptions": [
            "No stage specified.",
            "Only for GitHub Enterprise. An App creation has been requested. The user needs to confirm the creation in their GitHub enterprise host.",
            "User needs to authorize the GitHub (or Enterprise) App via OAuth.",
            "User needs to follow the link to install the GitHub (or Enterprise) App.",
            "Installation process has been completed."
          ],
          "description": "Output only. Current step of the installation process.",
          "type": "string",
          "readOnly": true,
          "enum": [
            "STAGE_UNSPECIFIED",
            "PENDING_CREATE_APP",
            "PENDING_USER_OAUTH",
            "PENDING_INSTALL_APP",
            "COMPLETE"
          ]
        },
        "actionUri": {
          "type": "string",
          "description": "Output only. Link to follow for next action. Empty string if the installation is already complete.",
          "readOnly": true
        },
        "message": {
          "type": "string",
          "description": "Output only. Message of what the user should do next to continue the installation. Empty string if the installation is already complete.",
          "readOnly": true
        }
      },
      "description": "Describes stage and necessary actions to be taken by the user to complete the installation. Used for GitHub and GitHub Enterprise based connections."
    },
    "AuditLogConfig": {
      "type": "object",
      "id": "AuditLogConfig",
      "description": "Provides the configuration for logging a type of permissions. Example: { \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.",
      "properties": {
        "logType": {
          "type": "string",
          "enumDescriptions": [
            "Default case. Should never be this.",
            "Admin reads. Example: CloudIAM getIamPolicy",
            "Data writes. Example: CloudSQL Users create",
            "Data reads. Example: CloudSQL Users list"
          ],
          "description": "The log type that this config enables.",
          "enum": [
            "LOG_TYPE_UNSPECIFIED",
            "ADMIN_READ",
            "DATA_WRITE",
            "DATA_READ"
          ]
        },
        "exemptedMembers": {
          "description": "Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.",
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "TaskRef": {
      "id": "TaskRef",
      "type": "object",
      "properties": {
        "resolver": {
          "enumDescriptions": [
            "Default enum type; should not be used.",
            "Bundles resolver. https://tekton.dev/docs/pipelines/bundle-resolver/",
            "GCB repo resolver.",
            "Simple Git resolver. https://tekton.dev/docs/pipelines/git-resolver/"
          ],
          "description": "Resolver is the name of the resolver that should perform resolution of the referenced Tekton resource.",
          "type": "string",
          "enum": [
            "RESOLVER_NAME_UNSPECIFIED",
            "BUNDLES",
            "GCB_REPO",
            "GIT"
          ]
        },
        "name": {
          "deprecated": true,
          "description": "Name of the task.",
          "type": "string"
        },
        "params": {
          "items": {
            "$ref": "Param"
          },
          "type": "array",
          "description": "Params contains the parameters used to identify the referenced Tekton resource. Example entries might include \"repo\" or \"path\" but the set of params ultimately depends on the chosen resolver."
        }
      },
      "description": "TaskRef can be used to refer to a specific instance of a task. PipelineRef can be used to refer to a specific instance of a Pipeline."
    },
    "ChildStatusReference": {
      "properties": {
        "whenExpressions": {
          "type": "array",
          "description": "WhenExpressions is the list of checks guarding the execution of the PipelineTask",
          "items": {
            "$ref": "WhenExpression"
          }
        },
        "pipelineTaskName": {
          "type": "string",
          "description": "PipelineTaskName is the name of the PipelineTask this is referencing."
        },
        "type": {
          "description": "Output only. Type of the child reference.",
          "type": "string",
          "readOnly": true,
          "enum": [
            "TYPE_UNSPECIFIED",
            "TASK_RUN"
          ],
          "enumDescriptions": [
            "Default enum type; should not be used.",
            "TaskRun."
          ]
        },
        "name": {
          "type": "string",
          "description": "Name is the name of the TaskRun or Run this is referencing."
        }
      },
      "type": "object",
      "description": "ChildStatusReference is used to point to the statuses of individual TaskRuns and Runs within this PipelineRun.",
      "id": "ChildStatusReference"
    },
    "GoogleDevtoolsCloudbuildV2OperationMetadata": {
      "properties": {
        "endTime": {
          "type": "string",
          "description": "Output only. The time the operation finished running.",
          "format": "google-datetime",
          "readOnly": true
        },
        "createTime": {
          "format": "google-datetime",
          "description": "Output only. The time the operation was created.",
          "type": "string",
          "readOnly": true
        },
        "verb": {
          "type": "string",
          "description": "Output only. Name of the verb executed by the operation.",
          "readOnly": true
        },
        "apiVersion": {
          "type": "string",
          "readOnly": true,
          "description": "Output only. API version used to start the operation."
        },
        "target": {
          "description": "Output only. Server-defined resource path for the target of the operation.",
          "readOnly": true,
          "type": "string"
        },
        "statusMessage": {
          "readOnly": true,
          "description": "Output only. Human-readable status of the operation, if any.",
          "type": "string"
        },
        "requestedCancellation": {
          "readOnly": true,
          "type": "boolean",
          "description": "Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`."
        }
      },
      "description": "Represents the metadata of the long-running operation.",
      "type": "object",
      "id": "GoogleDevtoolsCloudbuildV2OperationMetadata"
    },
    "Connection": {
      "properties": {
        "bitbucketDataCenterConfig": {
          "description": "Configuration for connections to Bitbucket Data Center.",
          "$ref": "BitbucketDataCenterConfig"
        },
        "bitbucketCloudConfig": {
          "$ref": "BitbucketCloudConfig",
          "description": "Configuration for connections to Bitbucket Cloud."
        },
        "disabled": {
          "type": "boolean",
          "description": "If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled."
        },
        "createTime": {
          "readOnly": true,
          "format": "google-datetime",
          "description": "Output only. Server assigned timestamp for when the connection was created.",
          "type": "string"
        },
        "name": {
          "description": "Immutable. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`.",
          "type": "string"
        },
        "updateTime": {
          "format": "google-datetime",
          "type": "string",
          "readOnly": true,
          "description": "Output only. Server assigned timestamp for when the connection was updated."
        },
        "etag": {
          "description": "This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.",
          "type": "string"
        },
        "annotations": {
          "description": "Allows clients to store small amounts of arbitrary data.",
          "additionalProperties": {
            "type": "string"
          },
          "type": "object"
        },
        "githubEnterpriseConfig": {
          "description": "Configuration for connections to an instance of GitHub Enterprise.",
          "$ref": "GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig"
        },
        "gitlabConfig": {
          "$ref": "GoogleDevtoolsCloudbuildV2GitLabConfig",
          "description": "Configuration for connections to gitlab.com or an instance of GitLab Enterprise."
        },
        "installationState": {
          "$ref": "InstallationState",
          "description": "Output only. Installation state of the Connection.",
          "readOnly": true
        },
        "reconciling": {
          "description": "Output only. Set to true when the connection is being set up or updated in the background.",
          "readOnly": true,
          "type": "boolean"
        },
        "githubConfig": {
          "$ref": "GitHubConfig",
          "description": "Configuration for connections to github.com."
        }
      },
      "description": "A connection to a SCM like GitHub, GitHub Enterprise, Bitbucket Data Center, Bitbucket Cloud or GitLab.",
      "type": "object",
      "id": "Connection"
    },
    "FetchReadTokenRequest": {
      "id": "FetchReadTokenRequest",
      "type": "object",
      "properties": {},
      "description": "Message for fetching SCM read token."
    },
    "GitHubConfig": {
      "type": "object",
      "description": "Configuration for connections to github.com.",
      "properties": {
        "authorizerCredential": {
          "$ref": "OAuthCredential",
          "description": "OAuth credential of the account that authorized the Cloud Build GitHub App. It is recommended to use a robot account instead of a human user account. The OAuth token must be tied to the Cloud Build GitHub App."
        },
        "appInstallationId": {
          "format": "int64",
          "description": "GitHub App installation id.",
          "type": "string"
        }
      },
      "id": "GitHubConfig"
    },
    "TestIamPermissionsRequest": {
      "id": "TestIamPermissionsRequest",
      "properties": {
        "permissions": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "description": "The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions)."
        }
      },
      "type": "object",
      "description": "Request message for `TestIamPermissions` method."
    },
    "BatchCreateRepositoriesResponse": {
      "id": "BatchCreateRepositoriesResponse",
      "description": "Message for response of creating repositories in batch.",
      "type": "object",
      "properties": {
        "repositories": {
          "items": {
            "$ref": "Repository"
          },
          "type": "array",
          "description": "Repository resources created."
        }
      }
    },
    "EmptyDirVolumeSource": {
      "type": "object",
      "properties": {},
      "id": "EmptyDirVolumeSource",
      "description": "Represents an empty Volume source."
    },
    "Status": {
      "properties": {
        "details": {
          "type": "array",
          "items": {
            "type": "object",
            "additionalProperties": {
              "description": "Properties of the object. Contains field @type with type URL.",
              "type": "any"
            }
          },
          "description": "A list of messages that carry the error details. There is a common set of message types for APIs to use."
        },
        "message": {
          "type": "string",
          "description": "A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client."
        },
        "code": {
          "description": "The status code, which should be an enum value of google.rpc.Code.",
          "type": "integer",
          "format": "int32"
        }
      },
      "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).",
      "id": "Status",
      "type": "object"
    },
    "SetIamPolicyRequest": {
      "properties": {
        "updateMask": {
          "format": "google-fieldmask",
          "type": "string",
          "description": "OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: \"bindings, etag\"`"
        },
        "policy": {
          "description": "REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.",
          "$ref": "Policy"
        }
      },
      "description": "Request message for `SetIamPolicy` method.",
      "type": "object",
      "id": "SetIamPolicyRequest"
    },
    "BitbucketDataCenterConfig": {
      "id": "BitbucketDataCenterConfig",
      "type": "object",
      "properties": {
        "serverVersion": {
          "type": "string",
          "readOnly": true,
          "description": "Output only. Version of the Bitbucket Data Center running on the `host_uri`."
        },
        "authorizerCredential": {
          "$ref": "UserCredential",
          "description": "Required. A http access token with the `REPO_ADMIN` scope access."
        },
        "sslCa": {
          "type": "string",
          "description": "Optional. SSL certificate to use for requests to the Bitbucket Data Center."
        },
        "readAuthorizerCredential": {
          "$ref": "UserCredential",
          "description": "Required. A http access token with the `REPO_READ` access."
        },
        "hostUri": {
          "description": "Required. The URI of the Bitbucket Data Center instance or cluster this connection is for.",
          "type": "string"
        },
        "webhookSecretSecretVersion": {
          "description": "Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/*/secrets/*/versions/*`.",
          "type": "string"
        },
        "serviceDirectoryConfig": {
          "$ref": "GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig",
          "description": "Optional. Configuration for using Service Directory to privately connect to a Bitbucket Data Center. This should only be set if the Bitbucket Data Center is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the Bitbucket Data Center will be made over the public internet."
        }
      },
      "description": "Configuration for connections to Bitbucket Data Center."
    },
    "Provenance": {
      "properties": {
        "enabled": {
          "enum": [
            "ENABLED_UNSPECIFIED",
            "REQUIRED",
            "OPTIMISTIC",
            "DISABLED"
          ],
          "type": "string",
          "enumDescriptions": [
            "Default to disabled (before AA regionalization), optimistic after",
            "Provenance failures would fail the run",
            "GCB will attempt to push to artifact analaysis and build state would not be impacted by the push failures.",
            "Disable the provenance push entirely."
          ],
          "description": "Optional. Provenance push mode."
        },
        "storage": {
          "enumDescriptions": [
            "Default PREFER_ARTIFACT_PROJECT.",
            "GCB will attempt to push provenance to the artifact project. If it is not available, fallback to build project.",
            "Only push to artifact project.",
            "Only push to build project."
          ],
          "description": "Optional. Where provenance is stored.",
          "enum": [
            "STORAGE_UNSPECIFIED",
            "PREFER_ARTIFACT_PROJECT",
            "ARTIFACT_PROJECT_ONLY",
            "BUILD_PROJECT_ONLY"
          ],
          "type": "string"
        },
        "region": {
          "enumDescriptions": [
            "The PipelineRun/TaskRun/Workflow will be rejected. Update this comment to push to the same region as the run in Artifact Analysis when it's regionalized.",
            "Push provenance to Artifact Analysis in global region."
          ],
          "description": "Optional. Provenance region.",
          "type": "string",
          "enum": [
            "REGION_UNSPECIFIED",
            "GLOBAL"
          ]
        }
      },
      "description": "Provenance configuration.",
      "type": "object",
      "id": "Provenance"
    },
    "FetchLinkableRepositoriesResponse": {
      "description": "Response message for FetchLinkableRepositories.",
      "properties": {
        "nextPageToken": {
          "type": "string",
          "description": "A token identifying a page of results the server should return."
        },
        "repositories": {
          "description": "repositories ready to be created.",
          "type": "array",
          "items": {
            "$ref": "Repository"
          }
        }
      },
      "id": "FetchLinkableRepositoriesResponse",
      "type": "object"
    },
    "UserCredential": {
      "properties": {
        "userTokenSecretVersion": {
          "description": "Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: `projects/*/secrets/*/versions/*`.",
          "type": "string"
        },
        "username": {
          "readOnly": true,
          "description": "Output only. The username associated to this token.",
          "type": "string"
        }
      },
      "description": "Represents a personal access token that authorized the Connection, and associated metadata.",
      "type": "object",
      "id": "UserCredential"
    },
    "Policy": {
      "id": "Policy",
      "properties": {
        "etag": {
          "description": "`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.",
          "format": "byte",
          "type": "string"
        },
        "version": {
          "description": "Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).",
          "format": "int32",
          "type": "integer"
        },
        "auditConfigs": {
          "type": "array",
          "items": {
            "$ref": "AuditConfig"
          },
          "description": "Specifies cloud audit logging configuration for this policy."
        },
        "bindings": {
          "type": "array",
          "description": "Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.",
          "items": {
            "$ref": "Binding"
          }
        }
      },
      "type": "object",
      "description": "An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { \"bindings\": [ { \"role\": \"roles/resourcemanager.organizationAdmin\", \"members\": [ \"user:mike@example.com\", \"group:admins@example.com\", \"domain:google.com\", \"serviceAccount:my-project-id@appspot.gserviceaccount.com\" ] }, { \"role\": \"roles/resourcemanager.organizationViewer\", \"members\": [ \"user:eve@example.com\" ], \"condition\": { \"title\": \"expirable access\", \"description\": \"Does not grant access after Sep 2020\", \"expression\": \"request.time \u003c timestamp('2020-10-01T00:00:00.000Z')\", } } ], \"etag\": \"BwWWja0YfJA=\", \"version\": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time \u003c timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/)."
    },
    "Security": {
      "id": "Security",
      "type": "object",
      "description": "Security configuration.",
      "properties": {
        "serviceAccount": {
          "type": "string",
          "description": "IAM service account whose credentials will be used at runtime."
        },
        "privilegeMode": {
          "description": "Optional. Privilege mode.",
          "enum": [
            "PRIVILEGE_MODE_UNSPECIFIED",
            "PRIVILEGED",
            "UNPRIVILEGED"
          ],
          "type": "string",
          "enumDescriptions": [
            "Default to PRIVILEGED.",
            "Privileged mode.",
            "Unprivileged mode."
          ]
        }
      }
    },
    "WorkspaceDeclaration": {
      "description": "WorkspaceDeclaration is a declaration of a volume that a Task requires.",
      "properties": {
        "description": {
          "type": "string",
          "description": "Description is a human readable description of this volume."
        },
        "name": {
          "type": "string",
          "description": "Name is the name by which you can bind the volume at runtime."
        },
        "readOnly": {
          "description": "ReadOnly dictates whether a mounted volume is writable.",
          "type": "boolean"
        },
        "optional": {
          "type": "boolean",
          "description": "Optional. Optional marks a Workspace as not being required in TaskRuns. By default this field is false and so declared workspaces are required."
        },
        "mountPath": {
          "description": "MountPath overrides the directory that the volume will be made available at.",
          "type": "string"
        }
      },
      "type": "object",
      "id": "WorkspaceDeclaration"
    },
    "SecurityContext": {
      "type": "object",
      "id": "SecurityContext",
      "properties": {
        "runAsNonRoot": {
          "description": "Optional. Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional",
          "type": "boolean"
        },
        "privileged": {
          "type": "boolean",
          "description": "Run container in privileged mode."
        },
        "runAsUser": {
          "description": "Optional. The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. +optional",
          "format": "int64",
          "type": "string"
        },
        "runAsGroup": {
          "type": "string",
          "description": "Optional. The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. +optional",
          "format": "int64"
        },
        "capabilities": {
          "$ref": "Capabilities",
          "description": "Optional. Adds and removes POSIX capabilities from running containers."
        },
        "allowPrivilegeEscalation": {
          "type": "boolean",
          "description": "Optional. AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. +optional"
        }
      },
      "description": "Security options the container should be run with."
    }
  },
  "batchPath": "batch",
  "rootUrl": "https://cloudbuild.googleapis.com/",
  "mtlsRootUrl": "https://cloudbuild.mtls.googleapis.com/",
  "resources": {
    "projects": {
      "resources": {
        "locations": {
          "resources": {
            "connections": {
              "methods": {
                "processWebhook": {
                  "id": "cloudbuild.projects.locations.connections.processWebhook",
                  "request": {
                    "$ref": "HttpBody"
                  },
                  "parameterOrder": [
                    "parent"
                  ],
                  "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections:processWebhook",
                  "path": "v2/{+parent}/connections:processWebhook",
                  "description": "ProcessWebhook is called by the external SCM for notifying of events.",
                  "parameters": {
                    "parent": {
                      "description": "Required. Project and location where the webhook will be received. Format: `projects/*/locations/*`.",
                      "pattern": "^projects/[^/]+/locations/[^/]+$",
                      "type": "string",
                      "location": "path",
                      "required": true
                    },
                    "webhookKey": {
                      "description": "Arbitrary additional key to find the maching repository for a webhook event if needed.",
                      "location": "query",
                      "type": "string"
                    }
                  },
                  "response": {
                    "$ref": "Empty"
                  },
                  "httpMethod": "POST"
                },
                "patch": {
                  "parameters": {
                    "updateMask": {
                      "format": "google-fieldmask",
                      "type": "string",
                      "location": "query",
                      "description": "The list of fields to be updated."
                    },
                    "allowMissing": {
                      "location": "query",
                      "description": "If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).",
                      "type": "boolean"
                    },
                    "etag": {
                      "description": "The current etag of the connection. If an etag is provided and does not match the current etag of the connection, update will be blocked and an ABORTED error will be returned.",
                      "type": "string",
                      "location": "query"
                    },
                    "name": {
                      "type": "string",
                      "required": true,
                      "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+$",
                      "description": "Immutable. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`.",
                      "location": "path"
                    }
                  },
                  "id": "cloudbuild.projects.locations.connections.patch",
                  "parameterOrder": [
                    "name"
                  ],
                  "path": "v2/{+name}",
                  "scopes": [
                    "https://www.googleapis.com/auth/cloud-platform"
                  ],
                  "response": {
                    "$ref": "Operation"
                  },
                  "description": "Updates a single connection.",
                  "request": {
                    "$ref": "Connection"
                  },
                  "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}",
                  "httpMethod": "PATCH"
                },
                "fetchLinkableRepositories": {
                  "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:fetchLinkableRepositories",
                  "id": "cloudbuild.projects.locations.connections.fetchLinkableRepositories",
                  "description": "FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.",
                  "parameterOrder": [
                    "connection"
                  ],
                  "response": {
                    "$ref": "FetchLinkableRepositoriesResponse"
                  },
                  "httpMethod": "GET",
                  "scopes": [
                    "https://www.googleapis.com/auth/cloud-platform"
                  ],
                  "parameters": {
                    "pageToken": {
                      "description": "Page start.",
                      "location": "query",
                      "type": "string"
                    },
                    "connection": {
                      "location": "path",
                      "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+$",
                      "required": true,
                      "description": "Required. The name of the Connection. Format: `projects/*/locations/*/connections/*`.",
                      "type": "string"
                    },
                    "pageSize": {
                      "location": "query",
                      "type": "integer",
                      "format": "int32",
                      "description": "Number of results to return in the list. Default to 20."
                    }
                  },
                  "path": "v2/{+connection}:fetchLinkableRepositories"
                },
                "getIamPolicy": {
                  "response": {
                    "$ref": "Policy"
                  },
                  "httpMethod": "GET",
                  "parameterOrder": [
                    "resource"
                  ],
                  "scopes": [
                    "https://www.googleapis.com/auth/cloud-platform"
                  ],
                  "id": "cloudbuild.projects.locations.connections.getIamPolicy",
                  "parameters": {
                    "resource": {
                      "description": "REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.",
                      "required": true,
                      "type": "string",
                      "location": "path",
                      "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+$"
                    },
                    "options.requestedPolicyVersion": {
                      "description": "Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).",
                      "location": "query",
                      "format": "int32",
                      "type": "integer"
                    }
                  },
                  "description": "Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.",
                  "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:getIamPolicy",
                  "path": "v2/{+resource}:getIamPolicy"
                },
                "create": {
                  "response": {
                    "$ref": "Operation"
                  },
                  "parameters": {
                    "parent": {
                      "location": "path",
                      "pattern": "^projects/[^/]+/locations/[^/]+$",
                      "description": "Required. Project and location where the connection will be created. Format: `projects/*/locations/*`.",
                      "type": "string",
                      "required": true
                    },
                    "connectionId": {
                      "type": "string",
                      "location": "query",
                      "description": "Required. The ID to use for the Connection, which will become the final component of the Connection's resource name. Names must be unique per-project per-location. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@."
                    }
                  },
                  "parameterOrder": [
                    "parent"
                  ],
                  "request": {
                    "$ref": "Connection"
                  },
                  "description": "Creates a Connection.",
                  "id": "cloudbuild.projects.locations.connections.create",
                  "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections",
                  "httpMethod": "POST",
                  "path": "v2/{+parent}/connections",
                  "scopes": [
                    "https://www.googleapis.com/auth/cloud-platform"
                  ]
                },
                "list": {
                  "parameters": {
                    "pageToken": {
                      "location": "query",
                      "type": "string",
                      "description": "Page start."
                    },
                    "parent": {
                      "description": "Required. The parent, which owns this collection of Connections. Format: `projects/*/locations/*`.",
                      "type": "string",
                      "pattern": "^projects/[^/]+/locations/[^/]+$",
                      "location": "path",
                      "required": true
                    },
                    "pageSize": {
                      "location": "query",
                      "description": "Number of results to return in the list.",
                      "format": "int32",
                      "type": "integer"
                    }
                  },
                  "id": "cloudbuild.projects.locations.connections.list",
                  "parameterOrder": [
                    "parent"
                  ],
                  "path": "v2/{+parent}/connections",
                  "description": "Lists Connections in a given project and location.",
                  "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections",
                  "response": {
                    "$ref": "ListConnectionsResponse"
                  },
                  "httpMethod": "GET",
                  "scopes": [
                    "https://www.googleapis.com/auth/cloud-platform"
                  ]
                },
                "setIamPolicy": {
                  "description": "Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.",
                  "scopes": [
                    "https://www.googleapis.com/auth/cloud-platform"
                  ],
                  "parameters": {
                    "resource": {
                      "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+$",
                      "location": "path",
                      "description": "REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.",
                      "required": true,
                      "type": "string"
                    }
                  },
                  "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:setIamPolicy",
                  "request": {
                    "$ref": "SetIamPolicyRequest"
                  },
                  "httpMethod": "POST",
                  "parameterOrder": [
                    "resource"
                  ],
                  "path": "v2/{+resource}:setIamPolicy",
                  "id": "cloudbuild.projects.locations.connections.setIamPolicy",
                  "response": {
                    "$ref": "Policy"
                  }
                },
                "get": {
                  "description": "Gets details of a single connection.",
                  "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}",
                  "httpMethod": "GET",
                  "path": "v2/{+name}",
                  "response": {
                    "$ref": "Connection"
                  },
                  "id": "cloudbuild.projects.locations.connections.get",
                  "parameterOrder": [
                    "name"
                  ],
                  "scopes": [
                    "https://www.googleapis.com/auth/cloud-platform"
                  ],
                  "parameters": {
                    "name": {
                      "type": "string",
                      "location": "path",
                      "description": "Required. The name of the Connection to retrieve. Format: `projects/*/locations/*/connections/*`.",
                      "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+$",
                      "required": true
                    }
                  }
                },
                "testIamPermissions": {
                  "path": "v2/{+resource}:testIamPermissions",
                  "description": "Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may \"fail open\" without warning.",
                  "httpMethod": "POST",
                  "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:testIamPermissions",
                  "response": {
                    "$ref": "TestIamPermissionsResponse"
                  },
                  "parameters": {
                    "resource": {
                      "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+$",
                      "description": "REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.",
                      "required": true,
                      "type": "string",
                      "location": "path"
                    }
                  },
                  "request": {
                    "$ref": "TestIamPermissionsRequest"
                  },
                  "id": "cloudbuild.projects.locations.connections.testIamPermissions",
                  "parameterOrder": [
                    "resource"
                  ],
                  "scopes": [
                    "https://www.googleapis.com/auth/cloud-platform"
                  ]
                },
                "delete": {
                  "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}",
                  "response": {
                    "$ref": "Operation"
                  },
                  "parameterOrder": [
                    "name"
                  ],
                  "httpMethod": "DELETE",
                  "description": "Deletes a single connection.",
                  "id": "cloudbuild.projects.locations.connections.delete",
                  "scopes": [
                    "https://www.googleapis.com/auth/cloud-platform"
                  ],
                  "parameters": {
                    "validateOnly": {
                      "description": "If set, validate the request, but do not actually post it.",
                      "type": "boolean",
                      "location": "query"
                    },
                    "etag": {
                      "description": "The current etag of the connection. If an etag is provided and does not match the current etag of the connection, deletion will be blocked and an ABORTED error will be returned.",
                      "location": "query",
                      "type": "string"
                    },
                    "name": {
                      "description": "Required. The name of the Connection to delete. Format: `projects/*/locations/*/connections/*`.",
                      "required": true,
                      "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+$",
                      "location": "path",
                      "type": "string"
                    }
                  },
                  "path": "v2/{+name}"
                }
              },
              "resources": {
                "repositories": {
                  "methods": {
                    "create": {
                      "response": {
                        "$ref": "Operation"
                      },
                      "parameters": {
                        "parent": {
                          "required": true,
                          "location": "path",
                          "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+$",
                          "description": "Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there.",
                          "type": "string"
                        },
                        "repositoryId": {
                          "type": "string",
                          "description": "Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.",
                          "location": "query"
                        }
                      },
                      "scopes": [
                        "https://www.googleapis.com/auth/cloud-platform"
                      ],
                      "id": "cloudbuild.projects.locations.connections.repositories.create",
                      "httpMethod": "POST",
                      "parameterOrder": [
                        "parent"
                      ],
                      "path": "v2/{+parent}/repositories",
                      "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories",
                      "description": "Creates a Repository.",
                      "request": {
                        "$ref": "Repository"
                      }
                    },
                    "list": {
                      "description": "Lists Repositories in a given connection.",
                      "scopes": [
                        "https://www.googleapis.com/auth/cloud-platform"
                      ],
                      "httpMethod": "GET",
                      "path": "v2/{+parent}/repositories",
                      "response": {
                        "$ref": "ListRepositoriesResponse"
                      },
                      "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories",
                      "parameterOrder": [
                        "parent"
                      ],
                      "id": "cloudbuild.projects.locations.connections.repositories.list",
                      "parameters": {
                        "pageToken": {
                          "description": "Page start.",
                          "location": "query",
                          "type": "string"
                        },
                        "pageSize": {
                          "type": "integer",
                          "location": "query",
                          "description": "Number of results to return in the list.",
                          "format": "int32"
                        },
                        "filter": {
                          "location": "query",
                          "type": "string",
                          "description": "A filter expression that filters resources listed in the response. Expressions must follow API improvement proposal [AIP-160](https://google.aip.dev/160). e.g. `remote_uri:\"https://github.com*\"`."
                        },
                        "parent": {
                          "location": "path",
                          "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+$",
                          "description": "Required. The parent, which owns this collection of Repositories. Format: `projects/*/locations/*/connections/*`.",
                          "required": true,
                          "type": "string"
                        }
                      }
                    },
                    "accessReadToken": {
                      "path": "v2/{+repository}:accessReadToken",
                      "request": {
                        "$ref": "FetchReadTokenRequest"
                      },
                      "scopes": [
                        "https://www.googleapis.com/auth/cloud-platform"
                      ],
                      "parameters": {
                        "repository": {
                          "description": "Required. The resource name of the repository in the format `projects/*/locations/*/connections/*/repositories/*`.",
                          "type": "string",
                          "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+/repositories/[^/]+$",
                          "required": true,
                          "location": "path"
                        }
                      },
                      "parameterOrder": [
                        "repository"
                      ],
                      "id": "cloudbuild.projects.locations.connections.repositories.accessReadToken",
                      "response": {
                        "$ref": "FetchReadTokenResponse"
                      },
                      "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:accessReadToken",
                      "description": "Fetches read token of a given repository.",
                      "httpMethod": "POST"
                    },
                    "delete": {
                      "response": {
                        "$ref": "Operation"
                      },
                      "parameters": {
                        "etag": {
                          "description": "The current etag of the repository. If an etag is provided and does not match the current etag of the repository, deletion will be blocked and an ABORTED error will be returned.",
                          "location": "query",
                          "type": "string"
                        },
                        "name": {
                          "type": "string",
                          "location": "path",
                          "description": "Required. The name of the Repository to delete. Format: `projects/*/locations/*/connections/*/repositories/*`.",
                          "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+/repositories/[^/]+$",
                          "required": true
                        },
                        "validateOnly": {
                          "type": "boolean",
                          "location": "query",
                          "description": "If set, validate the request, but do not actually post it."
                        }
                      },
                      "scopes": [
                        "https://www.googleapis.com/auth/cloud-platform"
                      ],
                      "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}",
                      "description": "Deletes a single repository.",
                      "path": "v2/{+name}",
                      "httpMethod": "DELETE",
                      "parameterOrder": [
                        "name"
                      ],
                      "id": "cloudbuild.projects.locations.connections.repositories.delete"
                    },
                    "batchCreate": {
                      "description": "Creates multiple repositories inside a connection.",
                      "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories:batchCreate",
                      "parameters": {
                        "parent": {
                          "description": "Required. The connection to contain all the repositories being created. Format: projects/*/locations/*/connections/* The parent field in the CreateRepositoryRequest messages must either be empty or match this field.",
                          "location": "path",
                          "required": true,
                          "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+$",
                          "type": "string"
                        }
                      },
                      "parameterOrder": [
                        "parent"
                      ],
                      "request": {
                        "$ref": "BatchCreateRepositoriesRequest"
                      },
                      "path": "v2/{+parent}/repositories:batchCreate",
                      "scopes": [
                        "https://www.googleapis.com/auth/cloud-platform"
                      ],
                      "id": "cloudbuild.projects.locations.connections.repositories.batchCreate",
                      "response": {
                        "$ref": "Operation"
                      },
                      "httpMethod": "POST"
                    },
                    "fetchGitRefs": {
                      "id": "cloudbuild.projects.locations.connections.repositories.fetchGitRefs",
                      "response": {
                        "$ref": "FetchGitRefsResponse"
                      },
                      "path": "v2/{+repository}:fetchGitRefs",
                      "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:fetchGitRefs",
                      "httpMethod": "GET",
                      "parameterOrder": [
                        "repository"
                      ],
                      "parameters": {
                        "refType": {
                          "enumDescriptions": [
                            "No type specified.",
                            "To fetch tags.",
                            "To fetch branches."
                          ],
                          "enum": [
                            "REF_TYPE_UNSPECIFIED",
                            "TAG",
                            "BRANCH"
                          ],
                          "type": "string",
                          "location": "query",
                          "description": "Type of refs to fetch"
                        },
                        "pageSize": {
                          "location": "query",
                          "description": "Optional. Number of results to return in the list. Default to 100.",
                          "type": "integer",
                          "format": "int32"
                        },
                        "pageToken": {
                          "location": "query",
                          "type": "string",
                          "description": "Optional. Page start."
                        },
                        "repository": {
                          "description": "Required. The resource name of the repository in the format `projects/*/locations/*/connections/*/repositories/*`.",
                          "location": "path",
                          "required": true,
                          "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+/repositories/[^/]+$",
                          "type": "string"
                        }
                      },
                      "description": "Fetch the list of branches or tags for a given repository.",
                      "scopes": [
                        "https://www.googleapis.com/auth/cloud-platform"
                      ]
                    },
                    "get": {
                      "description": "Gets details of a single repository.",
                      "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}",
                      "httpMethod": "GET",
                      "id": "cloudbuild.projects.locations.connections.repositories.get",
                      "parameterOrder": [
                        "name"
                      ],
                      "scopes": [
                        "https://www.googleapis.com/auth/cloud-platform"
                      ],
                      "response": {
                        "$ref": "Repository"
                      },
                      "path": "v2/{+name}",
                      "parameters": {
                        "name": {
                          "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+/repositories/[^/]+$",
                          "location": "path",
                          "type": "string",
                          "required": true,
                          "description": "Required. The name of the Repository to retrieve. Format: `projects/*/locations/*/connections/*/repositories/*`."
                        }
                      }
                    },
                    "accessReadWriteToken": {
                      "parameters": {
                        "repository": {
                          "type": "string",
                          "location": "path",
                          "required": true,
                          "pattern": "^projects/[^/]+/locations/[^/]+/connections/[^/]+/repositories/[^/]+$",
                          "description": "Required. The resource name of the repository in the format `projects/*/locations/*/connections/*/repositories/*`."
                        }
                      },
                      "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:accessReadWriteToken",
                      "path": "v2/{+repository}:accessReadWriteToken",
                      "id": "cloudbuild.projects.locations.connections.repositories.accessReadWriteToken",
                      "description": "Fetches read/write token of a given repository.",
                      "httpMethod": "POST",
                      "parameterOrder": [
                        "repository"
                      ],
                      "response": {
                        "$ref": "FetchReadWriteTokenResponse"
                      },
                      "scopes": [
                        "https://www.googleapis.com/auth/cloud-platform"
                      ],
                      "request": {
                        "$ref": "FetchReadWriteTokenRequest"
                      }
                    }
                  }
                }
              }
            },
            "operations": {
              "methods": {
                "get": {
                  "response": {
                    "$ref": "Operation"
                  },
                  "httpMethod": "GET",
                  "path": "v2/{+name}",
                  "id": "cloudbuild.projects.locations.operations.get",
                  "scopes": [
                    "https://www.googleapis.com/auth/cloud-platform"
                  ],
                  "parameters": {
                    "name": {
                      "description": "The name of the operation resource.",
                      "type": "string",
                      "required": true,
                      "pattern": "^projects/[^/]+/locations/[^/]+/operations/[^/]+$",
                      "location": "path"
                    }
                  },
                  "description": "Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.",
                  "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}",
                  "parameterOrder": [
                    "name"
                  ]
                },
                "cancel": {
                  "parameterOrder": [
                    "name"
                  ],
                  "description": "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
                  "parameters": {
                    "name": {
                      "type": "string",
                      "required": true,
                      "location": "path",
                      "pattern": "^projects/[^/]+/locations/[^/]+/operations/[^/]+$",
                      "description": "The name of the operation resource to be cancelled."
                    }
                  },
                  "id": "cloudbuild.projects.locations.operations.cancel",
                  "scopes": [
                    "https://www.googleapis.com/auth/cloud-platform"
                  ],
                  "request": {
                    "$ref": "CancelOperationRequest"
                  },
                  "httpMethod": "POST",
                  "flatPath": "v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel",
                  "path": "v2/{+name}:cancel",
                  "response": {
                    "$ref": "Empty"
                  }
                }
              }
            }
          },
          "methods": {
            "get": {
              "scopes": [
                "https://www.googleapis.com/auth/cloud-platform"
              ],
              "id": "cloudbuild.projects.locations.get",
              "httpMethod": "GET",
              "response": {
                "$ref": "Location"
              },
              "parameters": {
                "name": {
                  "location": "path",
                  "pattern": "^projects/[^/]+/locations/[^/]+$",
                  "required": true,
                  "type": "string",
                  "description": "Resource name for the location."
                }
              },
              "flatPath": "v2/projects/{projectsId}/locations/{locationsId}",
              "parameterOrder": [
                "name"
              ],
              "path": "v2/{+name}",
              "description": "Gets information about a location."
            },
            "list": {
              "description": "Lists information about the supported locations for this service.",
              "scopes": [
                "https://www.googleapis.com/auth/cloud-platform"
              ],
              "path": "v2/{+name}/locations",
              "parameters": {
                "filter": {
                  "type": "string",
                  "description": "A filter to narrow down results to a preferred subset. The filtering language accepts strings like `\"displayName=tokyo\"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).",
                  "location": "query"
                },
                "name": {
                  "pattern": "^projects/[^/]+$",
                  "location": "path",
                  "required": true,
                  "description": "The resource that owns the locations collection, if applicable.",
                  "type": "string"
                },
                "pageToken": {
                  "type": "string",
                  "location": "query",
                  "description": "A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page."
                },
                "pageSize": {
                  "location": "query",
                  "format": "int32",
                  "description": "The maximum number of results to return. If not set, the service selects a default.",
                  "type": "integer"
                }
              },
              "flatPath": "v2/projects/{projectsId}/locations",
              "parameterOrder": [
                "name"
              ],
              "response": {
                "$ref": "ListLocationsResponse"
              },
              "id": "cloudbuild.projects.locations.list",
              "httpMethod": "GET"
            }
          }
        }
      }
    }
  },
  "id": "cloudbuild:v2"
}
