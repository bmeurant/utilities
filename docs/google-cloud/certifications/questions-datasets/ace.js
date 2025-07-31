allQuizData = {
    "Associate Cloud Engineer": [
        {
            "question": "Your company is setting up a new Google Cloud project for a highly sensitive application. You need to ensure that all resources deployed within this project automatically enforce data residency requirements by only allowing deployment in the europe-west1 region. Which of the following is the most effective and scalable way to enforce this policy?",
            "options": [
                "A. Apply an IAM condition to all users, denying resource creation outside europe-west1.",
                "B. Configure a custom startup script on all Compute Engine instances to check their region.",
                "C. Create an Organization Policy with the constraints/gcp.resourceLocations constraint applied to the project.",
                "D. Set the default region for the project in the project settings."
            ],
            "correctAnswer": "C. Create an Organization Policy with the constraints/gcp.resourceLocations constraint applied to the project."
        },
        {
            "question": "Your security team requires that all new Compute Engine instances must have a specific set of security tags applied automatically upon creation. These tags are critical for firewall rules and auditing. How can you ensure this requirement is met for all instances launched in a specific project?",
            "options": [
                "A. Include the tags in the instance template used by a Managed Instance Group.",
                "B. Create a custom IAM role that mandates tags for instance creation.",
                "C. Develop a Cloud Function triggered by instance creation to apply the tags.",
                "D. Use an Organization Policy to enforce required instance tags."
            ],
            "correctAnswer": "D. Use an Organization Policy to enforce required instance tags."
        },
        {
            "question": "You are creating a new Google Cloud project for your team. You want to give a new team member, john.doe@example.com, the ability to create and manage virtual machines and disks, but nothing else. Which of the following predefined IAM roles should you assign to John Doe at the project level to adhere to the principle of least privilege?",
            "options": [
                "A. roles/compute.admin",
                "B. roles/compute.instanceAdmin.v1",
                "C. roles/editor",
                "D. roles/owner"
            ],
            "correctAnswer": "B. roles/compute.instanceAdmin.v1"
        },
        {
            "question": "Your company has a billing account with several projects linked to it. You need to assign a new finance team member, susan.smith@example.com, the ability to view the billing information for all projects linked to this billing account, but not make any changes to the projects or the billing setup. Which IAM role should you assign to Susan?",
            "options": [
                "A. roles/billing.user at the project level.",
                "B. roles/billing.viewer at the billing account level.",
                "C. roles/billing.creator at the organization level.",
                "D. roles/owner at the billing account level."
            ],
            "correctAnswer": "B. roles/billing.viewer at the billing account level."
        },
        {
            "question": "Your company is expanding its operations and creating new departments. Each department will have its own Google Cloud projects. You need to organize these projects logically and apply specific IAM policies and Organization Policies uniformly to all projects within a department. Which Google Cloud Resource Hierarchy component should you use for each department?",
            "options": [
                "A. Projects",
                "B. Folders",
                "C. Labels",
                "D. Resource Groups"
            ],
            "correctAnswer": "B. Folders"
        },
        {
            "question": "Your organization wants to restrict the creation of external IP addresses on Compute Engine instances within a specific project to enhance security. Which Organization Policy constraint should you use to enforce this?",
            "options": [
                "A. constraints/compute.vmExternalIpAccess",
                "B. constraints/compute.disableExternalIp",
                "C. constraints/compute.restrictPublicIp",
                "D. constraints/compute.requireShieldedVm"
            ],
            "correctAnswer": "A. constraints/compute.vmExternalIpAccess"
        },
        {
            "question": "You are setting up a new service account for an application that will only read data from a specific Cloud Storage bucket named my-sensitive-data-bucket. This service account should not be able to modify or delete any data, nor should it have access to any other buckets or services. Which IAM role should you grant to the service account, and at what level?",
            "options": [
                "A. roles/storage.objectViewer on the my-sensitive-data-bucket bucket.",
                "B. roles/storage.viewer on the project containing the bucket.",
                "C. roles/viewer on the my-sensitive-data-bucket bucket.",
                "D. roles/storage.admin on the my-sensitive-data-bucket bucket."
            ],
            "correctAnswer": "A. roles/storage.objectViewer on the my-sensitive-data-bucket bucket."
        },
        {
            "question": "Your team needs to upload large files (several terabytes) to Cloud Storage from an on-premises server. These uploads are critical and must be highly reliable, even over unstable network connections. You also want to resume interrupted uploads without restarting from scratch. Which tool is most suitable for this task?",
            "options": [
                "A. gsutil cp",
                "B. gsutil rsync",
                "C. gsutil mv",
                "D. gcloud storage cp (or gcloud storage rsync)",
                "E. Storage Transfer Service",
                "F. gsutil with resumable uploads (default behavior for large files)"
            ],
            "correctAnswer": "F. gsutil with resumable uploads (default behavior for large files)"
        },
        {
            "question": "You are setting up a new Google Cloud project and need to connect it to your existing on-premises network securely and with high bandwidth. You require a dedicated, private connection that bypasses the public internet. Which Google Cloud networking service should you use?",
            "options": [
                "A. Cloud VPN",
                "B. Cloud Interconnect (Dedicated Interconnect)",
                "C. Peering (VPC Network Peering)",
                "D. Cloud CDN"
            ],
            "correctAnswer": "B. Cloud Interconnect (Dedicated Interconnect)"
        },
        {
            "question": "You are configuring a new project for a development team. You want to give them the ability to deploy applications to App Engine and manage cron jobs, but you also want to ensure they cannot inadvertently delete App Engine versions or modify network settings. Which of the following predefined IAM roles should you assign to the development team at the project level?",
            "options": [
                "A. roles/appengine.admin",
                "B. roles/appengine.deployer",
                "C. roles/appengine.serviceAdmin",
                "D. roles/editor"
            ],
            "correctAnswer": "B. roles/appengine.deployer"
        },
        {
            "question": "Your company is developing a new mobile application that requires a NoSQL database. The database must be highly scalable globally, support complex queries across multiple fields, and provide low-latency access for millions of concurrent users. Which Google Cloud database service is the most suitable for this scenario?",
            "options": [
                "A. Cloud SQL",
                "B. Cloud Spanner",
                "C. Firestore in Native Mode",
                "D. Cloud Bigtable"
            ],
            "correctAnswer": "C. Firestore in Native Mode"
        },
        {
            "question": "Your company is migrating a legacy monolithic application to Google Cloud. The application runs on a Linux VM and uses a traditional file system that requires a POSIX-compliant file interface and shared access across multiple Compute Engine instances simultaneously. Which Google Cloud storage service is the most appropriate for this requirement?",
            "options": [
                "A. Cloud Storage (multi-regional bucket)",
                "B. Filestore (Basic or Standard tier)",
                "C. Persistent Disk (attached in read-write mode to a single VM)",
                "D. Cloud SQL"
            ],
            "correctAnswer": "B. Filestore (Basic or Standard tier)"
        },
        {
            "question": "Your company needs to ingest a massive amount of unstructured data (e.g., images, videos, log files) from various sources. This data needs to be stored durably and made available for later processing and analysis by multiple applications. You also need to keep the costs low for infrequently accessed data. Which Google Cloud storage service is the most appropriate for this requirement?",
            "options": [
                "A. Cloud Storage (with lifecycle management)",
                "B. Persistent Disk (Standard)",
                "C. Cloud SQL (PostgreSQL)",
                "D. Firestore (Native mode)"
            ],
            "correctAnswer": "A. Cloud Storage (with lifecycle management)"
        },
        {
            "question": "You are designing a solution to collect and process real-time events from IoT devices. These events arrive in high volume and velocity, and you need a highly scalable and durable messaging service to decouple the ingestion from the processing. Which Google Cloud service should you use to ingest these events?",
            "options": [
                "A. Cloud Pub/Sub",
                "B. Cloud Tasks",
                "C. Cloud Storage",
                "D. Cloud SQL"
            ],
            "correctAnswer": "A. Cloud Pub/Sub"
        },
        {
            "question": "Your company is migrating an existing application that uses Apache Kafka for real-time stream processing. You want to minimize code changes while leveraging a fully managed, scalable service on Google Cloud. Which Google Cloud service would be the best alternative to Apache Kafka for this migration?",
            "options": [
                "A. Cloud Pub/Sub",
                "B. Dataflow",
                "C. Dataproc (with Kafka installed)",
                "D. Cloud Bigtable"
            ],
            "correctAnswer": "A. Cloud Pub/Sub"
        },
        {
            "question": "Your application requires a highly available and highly durable key-value store for session management, user preferences, and frequently accessed small data. Latency is critical. Which Google Cloud service should you choose?",
            "options": [
                "A. Cloud SQL",
                "B. Cloud Storage",
                "C. Memorystore for Redis",
                "D. Cloud Bigtable",
                "E. Firestore"
            ],
            "correctAnswer": "C. Memorystore for Redis"
        },
        {
            "question": "You are planning a new application that will use App Engine. You need to store user-uploaded files, such as profile pictures and documents. These files will be accessed directly by users via unique URLs and occasionally updated. You also want to ensure high availability and global accessibility for these files. Which Google Cloud storage service should you use?",
            "options": [
                "A. Cloud SQL",
                "B. Cloud Storage",
                "C. Filestore",
                "D. Persistent Disk"
            ],
            "correctAnswer": "B. Cloud Storage"
        },
        {
            "question": "You need to deploy a highly available web application that uses a backend PostgreSQL database. The application requires automatic failover for the database in case of an outage and automatic patching for maintenance. You want to minimize operational overhead. Which Google Cloud database service should you choose?",
            "options": [
                "A. Compute Engine with PostgreSQL installed manually",
                "B. Cloud SQL for PostgreSQL",
                "C. Cloud Spanner",
                "D. Bare Metal Solution for PostgreSQL"
            ],
            "correctAnswer": "B. Cloud SQL for PostgreSQL"
        },
        {
            "question": "You are designing a secure network for your production environment on Google Cloud. You need to ensure that your Compute Engine instances in a specific subnet (prod-subnet) can only communicate with other instances within the same subnet and with a managed database service (Cloud SQL) in a different subnet (db-subnet), but not with the internet. What is the most effective combination of VPC Firewall Rules and Private IP configurations to achieve this?",
            "options": [
                "A. Use an instance with an external IP address and set up egress firewall rules.",
                "B. Ensure instances have only internal IP addresses and configure ingress/egress firewall rules between prod-subnet and db-subnet.",
                "C. Use Shared VPC and configure firewall rules across projects.",
                "D. Assign a public IP to instances in prod-subnet and restrict traffic with Network Tags."
            ],
            "correctAnswer": "B. Ensure instances have only internal IP addresses and configure ingress/egress firewall rules between prod-subnet and db-subnet."
        },
        {
            "question": "You are designing a data analytics solution. You need a data warehouse that can store petabytes of data, execute complex SQL queries, and handle massive analytical workloads without requiring you to manage any infrastructure. Which Google Cloud service should you choose?",
            "options": [
                "A. Cloud SQL",
                "B. BigQuery",
                "C. Cloud Bigtable",
                "D. Dataproc"
            ],
            "correctAnswer": "B. BigQuery"
        },
        {
            "question": "Your company is developing a new serverless backend for a mobile application. The backend needs to execute short-lived, event-driven functions in response to HTTP requests and events from other Google Cloud services (e.g., new file uploads to Cloud Storage, messages in Pub/Sub). You want to pay only for the compute time consumed. Which Google Cloud service should you choose?",
            "options": [
                "A. Compute Engine",
                "B. App Engine Standard environment",
                "C. Cloud Functions",
                "D. Cloud Run"
            ],
            "correctAnswer": "C. Cloud Functions"
        },
        {
            "question": "Your company wants to deploy a new microservices-based application. Each microservice will be packaged as a Docker container. You need a platform that offers automatic scaling, load balancing, and allows you to use custom runtimes and dependencies without managing the underlying servers. Which Google Cloud service is the most suitable?",
            "options": [
                "A. Compute Engine",
                "B. App Engine Flexible environment",
                "C. Cloud Functions",
                "D. Cloud Run",
                "E. Google Kubernetes Engine (GKE)"
            ],
            "correctAnswer": "D. Cloud Run"
        },
        {
            "question": "Your company runs a legacy application on a Compute Engine instance that frequently generates large log files (several GB each). These log files need to be analyzed by a separate batch process running daily. You want a cost-effective solution for storing these logs long-term, and the batch process requires direct file access (not object access). Which Google Cloud storage service should you use?",
            "options": [
                "A. Cloud Storage (Standard class)",
                "B. Persistent Disk (Standard)",
                "C. Cloud SQL",
                "D. Filestore (Basic SSD)",
                "E. Network File System (NFS) server on a Compute Engine instance",
                "F. Cloud Logging (Export to Cloud Storage)"
            ],
            "correctAnswer": "D. Filestore (Basic SSD)"
        },
        {
            "question": "You are deploying an application to Google Cloud that will run on Compute Engine. This application needs to access secret API keys and database credentials securely. You want to store these secrets centrally and ensure that only authorized instances can access them, with versioning and auditing capabilities. Which Google Cloud service should you use?",
            "options": [
                "A. Cloud Storage (private bucket)",
                "B. Environment variables on the Compute Engine instances",
                "C. Secret Manager",
                "D. Metadata server on Compute Engine instances"
            ],
            "correctAnswer": "C. Secret Manager"
        },
        {
            "question": "You need to deploy a new web application to Google Cloud. The application is packaged as a Docker container. You want a fully managed service that can scale down to zero when there is no traffic to minimize costs, and scale up quickly when traffic increases. Which Google Cloud service should you use for deployment?",
            "options": [
                "A. Compute Engine",
                "B. App Engine Standard environment",
                "C. Cloud Functions",
                "D. Cloud Run",
                "E. Google Kubernetes Engine (GKE)"
            ],
            "correctAnswer": "D. Cloud Run"
        },
        {
            "question": "You are tasked with deploying a new virtual machine to Compute Engine using the gcloud command-line tool. The VM needs to be in the us-central1-a zone, use the e2-medium machine type, and run a Debian 11 image. Which gcloud command should you use?",
            "options": [
                "A. gcloud compute instances create my-vm --zone=us-central1-a --machine-type=e2-medium --image=debian-cloud --image-project=debian-cloud-11",
                "B. gcloud compute instances create my-vm --zone=us-central1-a --machine-type=e2-medium --image-family=debian-11 --image-project=debian-cloud",
                "C. gcloud compute create-instance my-vm --zone=us-central1-a --machine-type=e2-medium --image=debian-11",
                "D. gcloud compute instance create my-vm --zone=us-central1-a --type=e2-medium --image-name=debian-11"
            ],
            "correctAnswer": "B. gcloud compute instances create my-vm --zone=us-central1-a --machine-type=e2-medium --image-family=debian-11 --image-project=debian-cloud"
        },
        {
            "question": "You have a Docker image for your web application stored in Artifact Registry. You need to deploy this image to Cloud Run. Which gcloud command should you use to deploy the service, assuming it's a new service named my-web-app and the image is us-central1-docker.pkg.dev/my-project/my-repo/my-app-image:latest?",
            "options": [
                "A. gcloud run deploy my-web-app --image=us-central1-docker.pkg.dev/my-project/my-repo/my-app-image:latest --platform=managed --region=us-central1",
                "B. gcloud app deploy my-web-app --image=us-central1-docker.pkg.dev/my-project/my-repo/my-app-image:latest --service=my-web-app",
                "C. gcloud compute instances create-from-container my-web-app --image=us-central1-docker.pkg.dev/my-project/my-repo/my-app-image:latest",
                "D. gcloud container images deploy my-web-app --image=us-central1-docker.pkg.dev/my-project/my-repo/my-app-image:latest"
            ],
            "correctAnswer": "A. gcloud run deploy my-web-app --image=us-central1-docker.pkg.dev/my-project/my-repo/my-app-image:latest --platform=managed --region=us-central1"
        },
        {
            "question": "You are deploying a web application that needs to receive traffic from the internet and distribute it across multiple Compute Engine instances in different regions for high availability and low latency. You also need to terminate SSL/TLS at the load balancer. Which Google Cloud load balancing service should you choose?",
            "options": [
                "A. Internal TCP/UDP Load Balancing",
                "B. Internal HTTP(S) Load Balancing",
                "C. External HTTP(S) Load Balancing",
                "D. Network Load Balancing (External TCP/UDP)"
            ],
            "correctAnswer": "C. External HTTP(S) Load Balancing"
        },
        {
            "question": "You need to configure a custom domain (www.example.com) for your web application deployed on App Engine. Which DNS record type and value should you configure in your domain registrar's DNS settings to point your domain to your App Engine application?",
            "options": [
                "A. CNAME record pointing to ghs.googlehosted.com",
                "B. A record pointing to a specific IP address provided by App Engine",
                "C. MX record pointing to ghs.googlehosted.com",
                "D. TXT record containing a verification string"
            ],
            "correctAnswer": "A. CNAME record pointing to ghs.googlehosted.com"
        },
        {
            "question": "Your development team frequently creates and deletes Compute Engine instances for testing purposes. You want to ensure that these instances are automatically deleted after a certain period (e.g., 24 hours) to avoid incurring unnecessary costs. Which Google Cloud feature or service can help you automate this cleanup?",
            "options": [
                "A. Instance Templates",
                "B. Managed Instance Groups",
                "C. Cloud Scheduler combined with Cloud Functions (or gcloud scripts)",
                "D. Preemptible VMs"
            ],
            "correctAnswer": "C. Cloud Scheduler combined with Cloud Functions (or gcloud scripts)"
        },
        {
            "question": "Your company wants to implement a robust CI/CD pipeline for its microservices. You need a fully managed service that can automatically build Docker images from source code, store them, and then deploy them to a container orchestration platform. Which Google Cloud services should you primarily integrate for this pipeline?",
            "options": [
                "A. Cloud Source Repositories, Compute Engine, and App Engine",
                "B. Cloud Build, Artifact Registry, and Google Kubernetes Engine (GKE)",
                "C. Cloud Composer, Cloud Storage, and Cloud Functions",
                "D. Git, Persistent Disk, and Cloud Run"
            ],
            "correctAnswer": "B. Cloud Build, Artifact Registry, and Google Kubernetes Engine (GKE)"
        },
        {
            "question": "Your company is migrating an on-premises batch processing job that runs daily. The job is currently implemented as a Python script that processes large files (terabytes) and writes results to a database. You need to run this job on Google Cloud as a managed service, without managing servers, and optimize for cost-effectiveness for batch workloads. Which Google Cloud service is the most suitable?",
            "options": [
                "A. Compute Engine",
                "B. App Engine Flexible environment",
                "C. Cloud Functions",
                "D. Dataflow",
                "E. Dataproc"
            ],
            "correctAnswer": "D. Dataflow"
        },
        {
            "question": "Your company is developing a machine learning model. You need a fully managed service that allows you to train your model using custom code, deploy it as an API endpoint, and manage its lifecycle (versioning, monitoring). Which Google Cloud service is the most suitable for this?",
            "options": [
                "A. Compute Engine",
                "B. BigQuery ML",
                "C. Vertex AI",
                "D. Dataproc",
                "E. Cloud Functions"
            ],
            "correctAnswer": "C. Vertex AI"
        },
        {
            "question": "You are responsible for monitoring the performance and health of your Compute Engine instances. You need to collect metrics such as CPU utilization, network traffic, and disk I/O, and create custom dashboards and alerts based on these metrics. Which Google Cloud service should you use?",
            "options": [
                "A. Cloud Audit Logs",
                "B. Cloud Trace",
                "C. Cloud Monitoring",
                "D. Cloud Logging",
                "E. Cloud Build",
                "F. Cloud Profiler"
            ],
            "correctAnswer": "C. Cloud Monitoring"
        },
        {
            "question": "Your application writes logs to stdout and stderr on your Compute Engine instances. You need to collect these logs centrally for analysis and troubleshooting. Which Google Cloud service will automatically collect these logs?",
            "options": [
                "A. Cloud Audit Logs",
                "B. Cloud Trace",
                "C. Cloud Monitoring",
                "D. Cloud Logging",
                "E. Cloud Build",
                "F. Cloud Profiler"
            ],
            "correctAnswer": "D. Cloud Logging"
        },
        {
            "question": "Your security team requires that all API calls and administrative actions performed on your Google Cloud project are recorded for auditing and compliance purposes, including who performed the action, when, and from where. Which Google Cloud service provides this functionality?",
            "options": [
                "A. Cloud Logging",
                "B. Cloud Monitoring",
                "C. Cloud Audit Logs",
                "D. Cloud Identity"
            ],
            "correctAnswer": "C. Cloud Audit Logs"
        },
        {
            "question": "Your application instances are deployed across multiple zones in a region to achieve high availability. You need to ensure that traffic is automatically distributed among these instances and that unhealthy instances are removed from rotation. Which Google Cloud service provides this functionality?",
            "options": [
                "A. Cloud DNS",
                "B. Compute Engine (sole-tenant nodes)",
                "C. External HTTP(S) Load Balancing",
                "D. Managed Instance Group (MIG) with Autohealing",
                "E. Cloud Armor"
            ],
            "correctAnswer": "C. External HTTP(S) Load Balancing"
        },
        {
            "question": "You are developing a new feature for your application and want to test it in a production-like environment with a small percentage of live user traffic before a full rollout. You need to redirect 5% of your production traffic to the new version of your application. Which deployment strategy should you use, and which Google Cloud service can help implement this?",
            "options": [
                "A. Blue/Green Deployment with Compute Engine",
                "B. Canary Deployment with Cloud Run (or App Engine/GKE)",
                "C. Rolling Update with Managed Instance Groups",
                "D. A/B Testing with Cloud CDN"
            ],
            "correctAnswer": "B. Canary Deployment with Cloud Run (or App Engine/GKE)"
        },
        {
            "question": "You want to automate the process of creating Compute Engine machine images from existing running instances to simplify your disaster recovery and instance provisioning processes. Which gcloud command should you use to create an image named my-custom-image from an instance named my-source-instance located in us-central1-a?",
            "options": [
                "A. gcloud compute images create my-custom-image --source-disk=my-source-instance --source-disk-zone=us-central1-a",
                "B. gcloud compute instances create-image my-custom-image --source-instance=my-source-instance --zone=us-central1-a",
                "C. gcloud compute snapshots create my-custom-image --source-disk=my-source-instance-disk --source-disk-zone=us-central1-a",
                "D. gcloud compute disks create-image my-custom-image --source-disk=my-source-instance-disk --source-disk-zone=us-central1-a"
            ],
            "correctAnswer": "A. gcloud compute images create my-custom-image --source-disk=my-source-instance --source-disk-zone=us-central1-a"
        },
        {
            "question": "Your company uses Compute Engine instances to run critical workloads. You need to configure a daily backup strategy for the persistent disks attached to these instances. The backups should be stored cost-effectively and be easy to restore in case of data loss. Which Google Cloud service or feature should you use?",
            "options": [
                "A. Cloud Storage (Coldline)",
                "B. Persistent Disk snapshots",
                "C. Cloud SQL backups",
                "D. Cloud Archival Storage"
            ],
            "correctAnswer": "B. Persistent Disk snapshots"
        },
        {
            "question": "Your company wants to restrict access to your Compute Engine instances based on IP address ranges and protocols. For example, you want to allow SSH access only from your corporate network, and HTTP/HTTPS traffic only from anywhere on the internet. Which Google Cloud networking component should you use to implement these rules?",
            "options": [
                "A. VPC Network Peering",
                "B. Cloud VPN",
                "C. Firewall rules",
                "D. Shared VPC"
            ],
            "correctAnswer": "C. Firewall rules"
        },
        {
            "question": "Your company is setting up a new Google Cloud project. To ensure compliance and security, the security team mandates that all new Compute Engine instances must use specific machine images approved by the organization, and that certain external IP address ranges are always blocked. Which Google Cloud service or feature can help enforce these organizational policies across the entire project or organization?",
            "options": [
                "A. Cloud DNS",
                "B. Cloud IAM",
                "C. Organization Policy Service",
                "D. Cloud Resource Manager"
            ],
            "correctAnswer": "C. Organization Policy Service"
        },
        {
            "question": "Your application uses a managed instance group (MIG) for its Compute Engine instances. You need to apply a security patch to all instances in the MIG without causing downtime to your application. Which update strategy should you use for the MIG?",
            "options": [
                "A. Blue/Green update",
                "B. Rolling update",
                "C. Canary update",
                "D. Manual update (one by one)"
            ],
            "correctAnswer": "B. Rolling update"
        },
        {
            "question": "Your company uses Compute Engine instances for its web application. You need to configure a schedule for automatically starting and stopping these instances to save costs during off-peak hours (e.g., stopping them at night and starting them in the morning). Which Google Cloud service can help you automate this process?",
            "options": [
                "A. Cloud Build",
                "B. Cloud Scheduler",
                "C. Cloud Functions",
                "D. Cloud Monitoring",
                "E. Compute Engine alone",
                "F. A combination of Cloud Scheduler and Cloud Functions",
                "G. Managed Instance Groups"
            ],
            "correctAnswer": "F. A combination of Cloud Scheduler and Cloud Functions"
        },
        {
            "question": "You need to ensure that your Compute Engine instances are automatically restarted if they crash or become unresponsive due to an application error. Which Compute Engine feature should you enable?",
            "options": [
                "A. Live Migration",
                "B. Automatic Restart",
                "C. Preemptible VMs",
                "D. Instance Template"
            ],
            "correctAnswer": "B. Automatic Restart"
        },
        {
            "question": "Your company wants to implement a robust disaster recovery plan for its critical application running on Compute Engine. This plan involves replicating data and application state to a different Google Cloud region to ensure business continuity in case of a regional outage. Which strategy or component is primarily associated with achieving cross-regional disaster recovery for Compute Engine?",
            "options": [
                "A. Load Balancer Health Checks",
                "B. Managed Instance Group (MIG) with Autohealing",
                "C. Multi-region Persistent Disks",
                "D. Cross-regional replication of Persistent Disk snapshots",
                "E. Site-to-site VPN",
                "F. Cloud DNS (with failover policies)"
            ],
            "correctAnswer": "D. Cross-regional replication of Persistent Disk snapshots"
        },
        {
            "question": "Your company uses Compute Engine instances as part of a distributed application. You observe that certain requests are experiencing high latency. You need a way to visualize the flow of requests across different services and identify the specific bottlenecks causing the latency. Which Google Cloud service should you use?",
            "options": [
                "A. Cloud Logging",
                "B. Cloud Monitoring",
                "C. Cloud Audit Logs",
                "D. Cloud Trace",
                "E. Cloud Profiler"
            ],
            "correctAnswer": "D. Cloud Trace"
        },
        {
            "question": "You are deploying a new web application on App Engine. Before making it generally available, you want to perform load testing to ensure it can handle the expected traffic. You need a way to generate synthetic load against your App Engine application to simulate a large number of users. Which Google Cloud service can help you achieve this?",
            "options": [
                "A. Cloud Scheduler",
                "B. Cloud Functions",
                "C. Distributed Load Testing using Compute Engine (or other compute services)",
                "D. Cloud Trace",
                "E. Cloud Monitoring"
            ],
            "correctAnswer": "C. Distributed Load Testing using Compute Engine (or other compute services)"
        },
        {
            "question": "Your security team requires a centralized solution to manage sensitive configuration data, such as API keys, database passwords, and cryptographic secrets, for your applications running on Google Cloud. This solution must provide fine-grained access control, versioning, and auditing capabilities. Which Google Cloud service should you use?",
            "options": [
                "A. Cloud Storage",
                "B. Cloud SQL",
                "C. Secret Manager",
                "D. Cloud Identity and Access Management (IAM)",
                "E. Environment variables (directly on VMs)"
            ],
            "correctAnswer": "C. Secret Manager"
        },
        {
            "question": "Your organization wants to automatically provision and manage infrastructure on Google Cloud using a declarative configuration language. You need to define your infrastructure as code, track changes, and apply updates in a consistent and repeatable manner. Which Google Cloud solution is best suited for this purpose?",
            "options": [
                "A. Cloud Deployment Manager",
                "B. Terraform",
                "C. Cloud Build",
                "D. Cloud Functions"
            ],
            "correctAnswer": "A. Cloud Deployment Manager"
        }
    ]
};